import db from '@/db/db';
import bcrypt from 'bcryptjs';


async function createAdmin() {
  const username = 'juneidi.Admin'
  const password = '3mRTBEF2agNI'

  const hashedPassword = await bcrypt.hash(password, 10)

  const admin = await db.admin.create({
    data: {
      username,
      password: hashedPassword,
    },
  })

  console.log(`Admin created with id: ${admin.id}`)
}

createAdmin()
  .catch(console.error)
  .finally(() => db.$disconnect())