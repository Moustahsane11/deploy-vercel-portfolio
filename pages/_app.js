// pages/_app.js
import Preloader from "@/components/elements/Preloader"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next';
import nextI18nConfig from '../next-i18next.config';
import { PortfolioProfileProvider } from '@/util/PortfolioProfileContext'

import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/iconoir.css"
import "../public/assets/css/demo.css"
import "../public/assets/css/style.css"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    AOS.init()
  }, [])

  return (
    <PortfolioProfileProvider profile={pageProps.portfolioProfile || null}>
      {pageProps.portfolioProfile ? (
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      ) : null}
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}
    </PortfolioProfileProvider>
  )
}

export default appWithTranslation(MyApp, nextI18nConfig);