import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // ...add more providers here
    ],
    pages: {
        signIn: "/api/auth/signin",
        error:"/error"
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                if (
                    profile.email_verified &&
                    profile.email?.endsWith("@ku.th")
                ) {
                    return true;
                } else {
                    throw new Error("Email not verified");
                }
            }
            throw new Error("Sign in provider not supported");
        },
        jwt(data) {
            return data.token;
        },
        session(data) {
            data.session.accessToken = data.token.accessToken;
            return data.session;
        },
    },
    secret: process.env.TOKEN_KEY,
    jwt: {
        secret: process.env.TOKEN_KEY,
    },
});
