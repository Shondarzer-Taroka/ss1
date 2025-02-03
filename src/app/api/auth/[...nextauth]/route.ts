import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Username or Mobile Number", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post("http://localhost:5353/api/login", {
            identifier: credentials?.identifier,
            password: credentials?.password,
          });

          const user = response.data;
          console.log(user);
          
          if (user.user) return user.user;
          return null;
        } catch (error) {
          console.error("Authorization error:", error.response?.data || error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.photo=user.photo
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.photo=token.photo
      return session;
    },
  },
  session: {
    strategy: "jwt", // Uses JWT instead of database session
  },
  secret: process.env.NEXTAUTH_SECRET, // Use a secure secret key
  pages: {
    signIn: "/login", // Redirects to login page
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };












