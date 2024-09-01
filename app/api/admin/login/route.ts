import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password'
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = sign({ username }, JWT_SECRET, { expiresIn: '1h' })

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    })

    return response
  }

  return NextResponse.json({ success: false }, { status: 401 })
}