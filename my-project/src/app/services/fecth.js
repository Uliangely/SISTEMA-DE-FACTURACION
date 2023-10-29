// import { json } from "express";

export async function fecth({ method = "GET", url, body = null }) {
  const options = {
    body,
    method,
    headers: { "Content-Type": "application/json" },
  };

  const response = await window.fetch(url, options);

  if (response.ok) {
    const resBody = await response.json();
    return resBody;
  }
  return null;
}
