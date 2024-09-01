import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import db from '@/db/db'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}

export async function generateToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1d' })
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword)
}

export async function findAdminByUsername(username: string) {
  return db.admin.findUnique({ where: { username } })
}