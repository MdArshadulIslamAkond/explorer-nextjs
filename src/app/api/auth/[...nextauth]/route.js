import connectDB from "@/app/lib/connectDB";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GitHubProvider from "next-auth/providers/github"
// import { type } from "os";
export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30*24*60*60,
         // The session token is usually either a random UUID or string, however if you
        // need a more customized session token string, you can define your own generate function.
        // generateSessionToken: () => {
        //     return randomUUID?.() ?? randomBytes(32).toString("hex")
        // }
    },
    providers: [
        CredentialsProvider({
            credentials:{
                email: {label: "Username", type: "text", placeholder: "Enter Your Email", required: true  },
                password: { label: "Password", type: "password", placeholder: "Enter Your Passward", required: true}
            },
            async authorize(credentials) {
                const {email, password} = credentials;
                if(!credentials){
                    return null;
                }
                
                if(email){
                    const db = await connectDB();
                    const currentUser = await db.collection("users").findOne({email});
                    if(currentUser && currentUser.password === password){
                        return currentUser;
                    }
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.type = user.type
            }
            return token
          },
        async session({ session, token}) {
        session.user.type = token.type;
            return session;
          },
    }
}
const handler = NextAuth(authOptions);


export{handler as GET, handler as POST}