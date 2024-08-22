'use server'

import db from '@/db/db'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'


export async function addClient(formData: FormData) {
  const title = formData.get('title') as string
  const link = formData.get('link') as string
  const buttonColor = formData.get('buttonColor') as string
  const backgroundColor = formData.get('bgColor') as string
  const imageUrl = formData.get('image') as string

  if (!title || !link || !buttonColor || !backgroundColor || !imageUrl) {
    return { error: 'All fields are required' }
  }

  try {
    const newClient = await db.client.create({
      data: {
        id: Date.now().toString(),
        title,
        Link: link,
        ButtonColor: buttonColor,
        BackgroundColor: backgroundColor,
        ImageUrl: imageUrl,
      },
    })

    revalidatePath('/admin/clients')
    return { success: true, client: newClient }
  } catch (error) {
    console.error('Failed to add client:', error)
    return { error: 'Failed to add client. Please try again.' }
  }
}