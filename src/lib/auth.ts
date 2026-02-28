import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                try {
                    await connectDB();
                    const user = await User.findOne({ email: credentials.email }).select("+password");
                    if (!user || !user.password) return null;

                    const isValid = await bcrypt.compare(credentials.password as string, user.password);
                    if (!isValid) return null;

                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        role: user.role,
                        subscription: user.subscription,
                    };
                } catch {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = (user as any).role;
                token.subscription = (user as any).subscription;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                (session.user as any).id = token.id as string;
                (session.user as any).role = token.role;
                (session.user as any).subscription = token.subscription;
            }
            return session;
        },
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    await connectDB();
                    const existing = await User.findOne({ email: user.email });
                    if (!existing) {
                        await User.create({
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            role: "user",
                        });
                    }
                } catch {
                    return false;
                }
            }
            return true;
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
});
