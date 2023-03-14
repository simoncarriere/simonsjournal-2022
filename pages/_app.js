import Head from "next/head";
import "../styles/globals.css";
import { ContactProvider } from "../context/ContactContext";
// Components
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Searchbar from "components/Searchbar";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Contentlayer Next.js Example</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <ContactProvider>
        <Header />
        <div className="mx-8 mt-6 md:mx-28 xl:mx-32">
          <div className="hidden md:block">
            <Searchbar />
          </div>
          <Component {...pageProps} />
        </div>

        <Contact />

        <Footer />
      </ContactProvider>
    </>
  );
}
