import NextLink from 'next/link'
import { usePortfolioProfile } from '@/util/PortfolioProfileContext'
import { prefixPortfolioHref } from '@/util/portfolioPaths'

export default function SiteLink({ href, ...rest }) {
    const profile = usePortfolioProfile()
    const resolvedHref = typeof href === 'string'
        ? prefixPortfolioHref(href, profile?.guid)
        : href

    return <NextLink href={resolvedHref} {...rest} />
}
