import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PortfolioRoute from '@/components/portfolio/PortfolioRoute'

export default function PortfolioHomeRoute() {
    return <PortfolioRoute />
}

export function getStaticPaths() {
    const { portfolioIndexPaths } = require('@/util/portfolioProfiles')
    return portfolioIndexPaths()
}

export async function getStaticProps({ locale, params }) {
    const { portfolioStaticProps, omitEmploymentCopy } = require('@/util/portfolioProfiles')
    const result = portfolioStaticProps(params.guid, [])
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
