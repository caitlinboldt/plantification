import "../styles/globals.scss";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Plantification</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,600;0,700;1,700&family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
