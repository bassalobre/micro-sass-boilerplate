import { z } from 'zod'
import { CredentialInput } from '@auth/core/providers/credentials'
import { getOrCreateUser } from '@/repositories/user'
import * as bcrypt from 'bcryptjs'

export async function authorizeByCredentials(credentials: CredentialInput) {
  const parsedCredentials = z
    .object({ email: z.string().email(), password: z.string().min(6) })
    .safeParse(credentials)

  if (parsedCredentials.success) {
    const { email, password } = parsedCredentials.data

    const user = await getOrCreateUser({ email, password })
    if (!user || !user.password) return null

    const passwordsMatch = await bcrypt.compare(password, user.password)

    if (passwordsMatch) return user
  }

  return null
}
