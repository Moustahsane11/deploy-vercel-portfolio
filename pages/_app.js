// pages/_app.js
import Preloader from "@/components/elements/Preloader"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import { appWithTranslation } from 'next-i18next';
import nextI18nConfig from '../next-i18next.config';

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
    <>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}
    </>
  )
}

export default appWithTranslation(MyApp, nextI18nConfig);