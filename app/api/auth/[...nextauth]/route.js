import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        await connectToDb();

        // Find user by username (case-insensitive)
        const user = await User.findOne({ username: creds.username?.toLowerCase() });
        if (!user) throw new Error("User not found");

        // Check password
        const isValid = await bcrypt.compare(creds.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        // Return user object
        return {
          id: String(user._id),
          name: user.username,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
        token.username = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.uid;
      session.user.name = token.username;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
