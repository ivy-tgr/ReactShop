import React from "react";
import "../styles/globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Fresch</title>
        <meta
          name="description"
          content="Nice Webshop implemented with React"
        />
        <meta name="keywords" content="Next.js, React, SEO" />
        <meta name="author" content="Tobias Gretler" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />;
      </SessionProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
