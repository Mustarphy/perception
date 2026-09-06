import { NextResponse } from "next/server";

/**
 * TEMPORARY SITE-WIDE SUSPENSION
 * -------------------------------
 * While SITE_SUSPENDED is true, every request (any path, including "/",
 * "/join-team", and any URL a visitor types) is rewritten to /suspended,
 * so only the Account Suspended page is ever shown. The URL in the
 * browser stays whatever the visitor typed, and refreshing keeps
 * showing the suspended page. No existing routes, pages, or components
 * are modified or deleted by this.
 *
 * TO RESTORE THE SITE: set SITE_SUSPENDED to false, or delete this file.
 */
const SITE_SUSPENDED = true;
const SUSPENDED_PATH = "/suspended";

export function middleware(request) {
  if (!SITE_SUSPENDED) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === SUSPENDED_PATH) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = SUSPENDED_PATH;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
