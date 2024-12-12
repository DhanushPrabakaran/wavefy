import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = [
  "/profile",
  "/dashboard",
  "/middleware",
  "/themes",
  "/signout",
  "/project",
  "/experience",
]; // List of protected routes

export default async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!session && isProtected) {
    const loginUrl = new URL("/signin", request.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname); // Save the original path for redirection after login
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
