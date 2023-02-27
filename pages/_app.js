import Head from 'next/head'
import '../styles/globals.css'
import {ContactProvider} from '../context/ContactContext'
// Components
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

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
        <div className='mx-8 sm:mx-16 lg:mx-20 xl:mx-32'>
          <Component {...pageProps} />
        </div>


        <Contact />

       <Footer/>

      </ContactProvider>
    </>
  )
}
