
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.weglot.com/weglot.min.js"
        onLoad={() => {
          Weglot.initialize({
            api_key : 'wg_beb8dc81dc72eaed78f9f9b5b7f469ac9'
        })}}
        onError={() => setHasError(true)}
        onReady={() => setIsReady(true)}
      />
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>    
    </>

  );
}

export default MyApp
  