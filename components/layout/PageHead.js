import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Mustapha Moustahsane - Full-Stack Developer Portfolio"}
                </title>
                <meta name="description" content="Full-Stack Developer with experience in .NET Core, Laravel, and React. Based in Casablanca, Morocco. Specialized in web development and database architecture." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Mustapha Moustahsane" />
                <link rel="canonical" href="https://rb.gy/l9qjbn" />
            </Head>
        </>
    )
}

export default PageHead
