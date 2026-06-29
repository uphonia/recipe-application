import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { LOGIN, PUBLIC_PATHS, ROOT } from "./common/consts/navigation.consts";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_URL = process.env.NEXT_PUBLIC_URL;

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get("access")?.value;
  const refresh = request.cookies.get("refresh")?.value;

  if (!token && !refresh) {
    return NextResponse.redirect(new URL(LOGIN, NEXT_URL));
  }

  if (!token && refresh) {
    // access expired, try to refresh
    const res = await fetch(`${API_URL}/api/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    if (!res.ok) {
      const response = NextResponse.redirect(new URL(LOGIN, NEXT_URL));
      response.cookies.delete("access");
      response.cookies.delete("refresh");
      return response;
    }

    const data = await res.json();
    const response = NextResponse.next();
    response.cookies.set("access", data.access, {
      path: ROOT,
      httpOnly: true,
      secure: false, // true once on HTTPS
      sameSite: "lax",
    });
    request.cookies.set("access", data.access);

    if (data.refresh) {
      response.cookies.set("refresh", data.refresh, {
        path: ROOT,
        httpOnly: true,
        secure: false, // true once on HTTPS
        sameSite: "lax",
      });
      request.cookies.set("refresh", data.refresh);
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
