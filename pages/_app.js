import Head from 'next/head'
import '../styles/globals.css'
import {ContactProvider} from '../context/ContactContext'
// Components
import { Header } from '../components/Header'
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
        <div >
          <Component {...pageProps} />
        </div>
        <footer className='flex items-center justify-center w-full m-auto align-middle transition my-36 text-slate-500 hover:text-slate-700'>
          <h5><a href="mailto:hello@simonsjournal.com">hello@simonsjournal.com</a></h5>
        </footer>
        <Contact />
      </ContactProvider>
    </>
  )
}
