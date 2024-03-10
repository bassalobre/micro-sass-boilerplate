import { prisma } from '@/services/database'
import * as bcrypt from 'bcryptjs'

export const getOrCreateUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    let user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10)

      user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      })
    }

    return user
  } catch {
    return null
  }
}
