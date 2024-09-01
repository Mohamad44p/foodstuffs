import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Create internationalization middleware
const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

// Combine internationalization and admin authentication
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the request is for the admin route (including localized versions)
  if (pathname.includes('/admin') && !pathname.endsWith('/login')) {
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      // Redirect to login page, preserving the locale
      const locale = pathname.split('/')[1];
      return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url))
    }

    try {
      verify(token, JWT_SECRET)
      // If verification succeeds, continue to the admin route
      return intlMiddleware(request)
    } catch (error) {
      // If verification fails, redirect to login page, preserving the locale
      const locale = pathname.split('/')[1];
      return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url))
    }
  }

  // For non-admin routes, just apply the internationalization middleware
  return intlMiddleware(request)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};