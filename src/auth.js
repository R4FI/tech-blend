// lib/auth.js
import { getSession } from "next-auth/react";

export default async function auth(req, res, next) {
  const session = await getSession({ req });

  if (!session?.user) {
    // User is not authenticated, redirect to login page
    res.writeHead(302, { Location: "/login" });
    res.end();
    return;
  }

  // User is authenticated, proceed to the next middleware or route handler
  return next();
}
