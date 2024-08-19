import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_EMAIL = 'admin@example.com'
const ADMIN_PASSWORD = '123'

export function middleware(request: NextRequest) {
    const authHeader = request.headers.get('authorization')

    if (authHeader) {
        const authValue = authHeader.split(' ')[1]
        const [email, password] = atob(authValue).split(':')

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            return NextResponse.next()
        }
    }

    return new NextResponse('Authentication required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    })
}

export const config = {
    matcher: '/admin/:path*',
}