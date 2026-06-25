import { useRouter } from "next/router";
import { useEffect } from "react";

import { SignUp } from "../Account/SignUp/SignUp";
import { useAuth } from "../common/hooks/AuthProvider/authProvider.hooks";
import { HOME } from "../common/consts/navigation.consts";

export default function SignUpPage() {
  const { user, userLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userLoading && user) {
      router.replace(HOME);
    }
  }, [router, user, userLoading]);

  if (userLoading || user) return null;

  return <SignUp />;
}
