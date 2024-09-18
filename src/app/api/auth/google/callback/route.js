import { google } from "@/utils/arctic";
import { cookies } from "next/headers";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const codeVerifier = cookies().get("code_verifier")?.value;

  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });

  const user = await res.json();
  console.log(user);
}
