import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import { NProgress } from 'nprogress'

import Layout from '../components/Layout'

//everything must be wrapped in chakraprovider, much like a container like canvas in react three

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
