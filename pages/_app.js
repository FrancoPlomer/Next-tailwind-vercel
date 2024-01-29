//Incorpora una cabecera para nuestra app

import Head from 'next/head'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
      <title>Next-tailwind-vercel</title>
      <meta key="description" name="description" content="Netx-tailwind-vercel"/>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
