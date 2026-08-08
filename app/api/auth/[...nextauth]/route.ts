import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Yahan aap apna login validation ya database check laga sakte hain
        if (credentials?.email && credentials?.password) {
          return { id: "1", name: "Fahad Afzal", email: credentials.email };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
