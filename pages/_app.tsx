import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../store";
import { SessionProvider } from "next-auth/react";
import React from "react";
import GraphqlProvider from "components/GraphqlProvider";

const MyApp: React.FC<AppProps> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <>
            <Head>
                <title>Ku Event</title>
                <meta name="nextjs-typescript-tailwind-redux-graphql" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SessionProvider session={session}>
                <GraphqlProvider>
                    <Component {...pageProps} />
                </GraphqlProvider>
            </SessionProvider>
        </>
    );
};

export default wrapper.withRedux(MyApp);
