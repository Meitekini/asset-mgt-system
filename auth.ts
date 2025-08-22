import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { saltAndGHashPassword } from "./lib/utils";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        name: "Credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
           let user = null;
           const hashedPassword = saltAndGHashPassword(credentials?.password as string)
           console.log(hashedPassword);
           console.log(credentials.username);
           
           

           return user;
        },
    }),
  ],
})