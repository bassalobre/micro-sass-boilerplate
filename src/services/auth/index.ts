import NextAuth from "next-auth"
import EmailProvider from "@auth/core/providers/email";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@/services/database";

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
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnLogin = nextUrl.pathname.startsWith('/login');

            if (isOnLogin && isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }

            return isLoggedIn;
        }
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
        })
    ],
})
