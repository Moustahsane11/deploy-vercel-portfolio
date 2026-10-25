import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PortfolioRoute from '@/components/portfolio/PortfolioRoute'

export default function PortfolioSlugRoute() {
    return <PortfolioRoute />
}

export function getStaticPaths() {
    const { portfolioSlugPaths } = require('@/util/portfolioProfiles')
    return portfolioSlugPaths()
}

export async function getStaticProps({ locale, params }) {
    const { portfolioStaticProps, omitEmploymentCopy } = require('@/util/portfolioProfiles')
    const result = portfolioStaticProps(params.guid, params.slug)
    if (result.notFound) return { notFound: true }
    const props = omitEmploymentCopy({
        ...(await serverSideTranslations(locale, ['common'])),
        portfolioProfile: {
            guid: result.profile.guid,
            sections: result.profile.sections,
        },
    }, result.profile)
    return { props }
}
