
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></Script>
        <Script>
            Weglot.initialize({
              api_key : 'wg_beb8dc81dc72eaed78f9f9b5b7f469ac9',
            });
        </Script> 
      </Head>
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>  
    </>
    
  );
}

export default MyApp
  