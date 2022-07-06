import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    context: ({ req }) => {
        return {
            req: req,
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

export const config = {
    api: {
        bodyParser: false,
    },
};
