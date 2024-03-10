import NextAuth from 'next-auth'
import EmailProvider from '@auth/core/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/services/database'
import Credentials from '@auth/core/providers/credentials'
import GoogleProvider from '@auth/core/providers/google'
import { authorizeByCredentials } from '@/services/auth/credentials-method'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
    verifyRequest: '/login',
    newUser: '/dashboard',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Credentials({ authorize: authorizeByCredentials }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
