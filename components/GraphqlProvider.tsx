import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface Props {}

const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
});

const GraphqlProvider: React.FC<Props> = ({ children }) => {
    return <ApolloProvider {...{ client, children }} />;
};

export default GraphqlProvider;
