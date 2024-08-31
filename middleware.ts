import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const middleware = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextRequest) {
  const res = middleware(req);

  if (res.status === 404) {
    const url = req.nextUrl.clone();
    url.pathname = `/${url.locale}/not-found`;
    return NextResponse.rewrite(url);
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};