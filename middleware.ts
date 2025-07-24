import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes (except login)
  if (request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login")) {
    // Check for auth session in cookies or headers
    const authSession = request.cookies.get("auth_session")

    // If no auth session, redirect to login
    if (!authSession) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    try {
      // Validate the session (in a real app, you'd verify the token)
      const session = JSON.parse(authSession.value)
      if (!session.isAuthenticated) {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      }
    } catch (error) {
      // Invalid session format, redirect to login
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
