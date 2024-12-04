import "../styles/globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fresch</title>
        <meta name="description" content="Nice Webshop implemented with React" />
        <meta name="keywords" content="Next.js, React, SEO" />
        <meta name="author" content="Tobias" />
      </Head>
    <Component {...pageProps} />;
    
    </>
  );
}

export default MyApp;
