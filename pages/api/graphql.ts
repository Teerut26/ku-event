import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

export const config = {
    api: {
        sizeLimit: "5mb",
        bodyParser: false,
    },
};

const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    context: async ({ req }) => {
        const token = await getToken({
            req,
            secret: process.env.TOKEN_KEY,
        });
        return {
            req,
            token,
        };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}
