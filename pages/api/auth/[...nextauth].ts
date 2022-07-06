import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                if (
                    profile.email_verified &&
                    profile.email!.endsWith("@ku.th")
                ) {
                    return true;
                }
                return false;
            }
            return false;
        },
        // async signIn({ user, account, profile, email, credentials }) {
        //     return true
        //   },
    },
});
