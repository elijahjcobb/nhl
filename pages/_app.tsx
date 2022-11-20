import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'


const poppins = Poppins({
  weight: ["200", "400", "500", "600", "800"]
})

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const listen = () => { };
    document.addEventListener('touchstart', listen, false);
    return () => document.removeEventListener('touchstart', listen);
  })

  return (
    <div className={poppins.className}>
      <Head>
        <title>NHL++</title>
        <meta name="description" content="A better NHL stats website." />
        <link rel="icon" href="/hockey.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
