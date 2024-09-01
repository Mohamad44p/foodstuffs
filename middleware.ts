// middleware.ts
import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for API routes
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Handle internationalization first
  const pathnameIsMissingLocale = ['en', 'ar'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en'
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }

  // Apply intl middleware
  const response = intlMiddleware(request);

  // Handle admin routes
  const pathnameWithoutLocale = pathname.replace(/^\/(?:en|ar)/, '');
  if (pathnameWithoutLocale.startsWith('/admin')) {
    const token = request.cookies.get('admin_token')?.value
    const locale = pathname.split('/')[1];

    if (pathnameWithoutLocale === '/admin/login') {
      if (token) {
        try {
          verify(token, JWT_SECRET)
          return NextResponse.redirect(new URL(`/${locale}/admin`, request.url))
        } catch (error) {
          // If token is invalid, continue to login page
          return response;
        }
      }
      return response;
    }

    if (!token) {
      return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url))
    }
    if (token){
      return response;
    }

    try {
      verify(token, JWT_SECRET)
      return response;
    } catch (error) {
      return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url))
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/:locale/admin/:path*', '/:locale/admin', '/admin/:path*', '/admin']
};