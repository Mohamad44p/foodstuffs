// app/api/admin/login/route.ts
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import db from '@/db/db'

const JWT_SECRET = process.env.JWT_SECRET

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const admin = await db.admin.findUnique({ where: { username } })

    if (!admin) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password)

    if (isPasswordValid) {
      const token = sign({ id: admin.id, username: admin.username, role: 'admin' }, JWT_SECRET!, { expiresIn: '30d' })

      const response = NextResponse.json({ success: true, message: 'Login successful' })
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      })

      return response
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ success: false, message: 'An error occurred' }, { status: 500 })
  }
}