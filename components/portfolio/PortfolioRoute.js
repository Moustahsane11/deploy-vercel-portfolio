import { useEffect } from 'react'
import { useRouter } from 'next/router'
import AOS from 'aos'
import { resolvePortfolioPage } from '@/util/portfolioPaths'
import Home from '@/pages/index'
import About from '@/pages/about'
import Credentials from '@/pages/credentials'
import Works from '@/pages/works'
import Contact from '@/pages/contact'
import Service from '@/pages/service'
import ProjectDetails from '@/pages/project/[id]'

const PAGES = {
    home: Home,
    about: About,
    credentials: Credentials,
    works: Works,
    contact: Contact,
    service: Service,
    project: ProjectDetails,
}

export default function PortfolioRoute() {
    const router = useRouter()
    const slug = Array.isArray(router.query.slug) ? router.query.slug : []
    const page = resolvePortfolioPage(slug)
    const Page = page ? PAGES[page.key] : null

    useEffect(() => {
        AOS.refresh()
    }, [router.asPath])

    if (!router.isReady || !Page) return null
    return <Page key={router.asPath} />
}
