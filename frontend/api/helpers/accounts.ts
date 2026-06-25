import { LogInPayload } from "../payloads/LogInPayload";
import { SignUpPayload } from "../payloads/SignUpPayload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signUp = async (payload: SignUpPayload) => {
  const response = await fetch(`${API_URL}/accounts/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create user account.");
  }

  return response.json();
};

export const logIn = async (payload: LogInPayload) => {
  const response = await fetch(`${API_URL}/accounts/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to log in");
  }

  return response.json();
};

export const logOut = async () => {
  const response = await fetch(`${API_URL}/accounts/logout/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to log out");
  }
};

export const me = async () => {
  const response = await fetch(`${API_URL}/accounts/me`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Invalid session");
  }

  return response.json();
};
