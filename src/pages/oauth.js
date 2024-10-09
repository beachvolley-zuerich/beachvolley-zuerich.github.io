// src/pages/oauth.js

import { createAdminClient, SESSION_COOKIE } from "../server/appwrite";
import { OAuthProvider } from "node-appwrite";



export const POST = async ({ redirect, url }) => {
    // Create the Appwrite client
    const { account } = createAdminClient();
  
    // Create an OAuth token
    const redirectUrl = await account.createOAuth2Token(
      OAuthProvider.Github,
      `${url.origin}/oauth`,
      `${url.origin}/signin`
    );
  
    // Redirect the end-user to the OAuth2 provider authentication
    return redirect(redirectUrl);
  };
  

export const GET = async ({ redirect, cookies, url }) => {
  // Get the user ID and secret from the URL
  const userId = url.searchParams.get("userId");
  const secret = url.searchParams.get("secret");

  // Create the Appwrite client
  const { account } = createAdminClient();

  // Exchange the token for a session
  const session = await account.createSession(userId, secret);

  // Set the session cookie
  cookies.set(SESSION_COOKIE, session.secret, {
    sameSite: "lax",
    expires: new Date(session.expire),
    secure: true,
    httpOnly: true,
    path: "/",
  });

  // Redirect the logged in user to the account page
  return redirect("/account");
};

