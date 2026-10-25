import Head from 'next/head'
import { usePortfolioProfile } from '@/util/PortfolioProfileContext'

const PageHead = ({ headTitle }) => {
    const profile = usePortfolioProfile()
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Mustapha Moustahsane - Full-Stack Developer Portfolio"}
                </title>
                <meta name="description" content="Full-Stack Developer with experience in .NET Core, Laravel, and React. Based in Losheim am See, Germany. Specialized in web development and database architecture." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Mustapha Moustahsane" />
                {profile ? <meta name="robots" content="noindex, nofollow" /> : null}
                {!profile ? <link rel="canonical" href="https://rb.gy/l9qjbn" /> : null}
            </Head>
        </>
    )
}

export default PageHead
