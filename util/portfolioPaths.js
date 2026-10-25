const PROJECT_IDS = ['1', '2', '3', '4']
const STATIC_PAGES = ['about', 'credentials', 'works', 'contact', 'service']
const LOCALES = new Set(['fr', 'en', 'de'])

function slugFromAsPath(asPath) {
    const path = (asPath || '/').split('?')[0].split('#')[0]
    const parts = path.split('/').filter(Boolean)

    if (parts[0] === '_next' && parts[1] === 'data') {
        const rest = parts.slice(3)
        if (LOCALES.has(rest[0])) rest.shift()
        if (rest.length) rest.shift()
        const last = rest[rest.length - 1]
        if (last && last.endsWith('.json')) rest[rest.length - 1] = last.slice(0, -5)
        return rest
    }

    if (LOCALES.has(parts[0])) parts.shift()
    if (parts.length) parts.shift()
    return parts
}

function resolvePortfolioPage(slug) {
    const parts = Array.isArray(slug) ? slug : []
    if (parts.length === 0) return { key: 'home' }
    if (parts.length === 1 && STATIC_PAGES.includes(parts[0])) {
        return { key: parts[0] }
    }
    if (parts.length === 2 && parts[0] === 'project' && PROJECT_IDS.includes(String(parts[1]))) {
        return { key: 'project', id: String(parts[1]) }
    }
    return null
}

function prefixPortfolioHref(href, guid) {
    if (!guid || typeof href !== 'string') return href
    if (!href.startsWith('/') || href.startsWith('//')) return href

    const hashIndex = href.indexOf('#')
    const hash = hashIndex >= 0 ? href.slice(hashIndex) : ''
    const withoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href
    const queryIndex = withoutHash.indexOf('?')
    const query = queryIndex >= 0 ? withoutHash.slice(queryIndex) : ''
    const pathname = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash

    if (pathname === `/${guid}` || pathname.startsWith(`/${guid}/`)) return href

    const prefixed = pathname === '/' ? `/${guid}` : `/${guid}${pathname}`
    return `${prefixed}${query}${hash}`
}

function normalizePortfolioPath(asPath, guid) {
    const path = (asPath || '/').split('?')[0].split('#')[0] || '/'
    if (!guid) return path || '/'
    if (path === `/${guid}`) return '/'
    const prefix = `/${guid}/`
    if (path.startsWith(prefix)) {
        return path.slice(prefix.length - 1) || '/'
    }
    return path || '/'
}

module.exports = {
    PROJECT_IDS,
    STATIC_PAGES,
    resolvePortfolioPage,
    slugFromAsPath,
    prefixPortfolioHref,
    normalizePortfolioPath,
}
