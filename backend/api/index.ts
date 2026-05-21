const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const testConnection = async () => {
  const response = await fetch(`${API_URL}/api/test/`);
  const data = await response.json();
  return data;
};
