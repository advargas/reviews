import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Reviews</title>
        <meta key="description" name="description" content="reviews" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
