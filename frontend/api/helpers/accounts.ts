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
    throw new Error(error.message || "Failed to create user account.");
  }

  return response.json();
};

export const logIn = async (payload: LogInPayload) => {
  const response = await fetch(`${API_URL}/api/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to log in");
  }
};

export const logOut = async () => {
  const response = await fetch(`${API_URL}/accounts/logout/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: localStorage.getItem("refresh") }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to log out");
  }

  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};
