import Head from 'next/head'
import '../styles/globals.css'
import {ContactProvider} from '../context/ContactContext'

import { Header } from '../components/Header'
import Contact from '../components/Contact'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContactProvider>
        <Head>
          <title>Contentlayer Next.js Example</title>
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
        </Head>

        <Header />

        <div >
          <Component {...pageProps} />
        </div>
        <footer className='w-full flex my-36 m-auto justify-center align-middle items-center text-slate-500 hover:text-slate-700 transition'>
          <h5><a href="mailto:hello@simonsjournal.com">hello@simonsjournal.com</a></h5>
        </footer>
        <Contact />
      </ContactProvider>
    </>
  )
}
