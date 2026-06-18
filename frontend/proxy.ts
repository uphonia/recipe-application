import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("access")?.value;
  const refresh = request.cookies.get("refresh")?.value;

  if (!token && !refresh) {
    return NextResponse.redirect(new URL("/signup", "http://localhost:3000"));
  }

  if (!token && refresh) {
    // access expired, try to refresh
    const res = await fetch(`${API_URL}/api/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    if (!res.ok) {
      return NextResponse.redirect(new URL("/login", "http://localhost:3000"));
    }

    const data = await res.json();
    const response = NextResponse.next();
    response.cookies.set("access", data.access, { path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!login|signup|_next/static|_next/image|favicon.ico).*)"],
};
