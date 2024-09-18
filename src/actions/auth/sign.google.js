"use server";

import { generateCodeVerifier, generateState } from "arctic";
import { google } from "@/utils/arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginWithGoogle() {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  cookies().set("state", state);

  redirect(url.href);
}
