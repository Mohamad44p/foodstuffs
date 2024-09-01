// app/api/admin/check-auth/route.ts
import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET 

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('admin_token')

  if (!token) {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 })
  }

  try {
    verify(token.value, JWT_SECRET!)
    return NextResponse.json({ isAuthenticated: true })
  } catch (error) {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 })
  }
}