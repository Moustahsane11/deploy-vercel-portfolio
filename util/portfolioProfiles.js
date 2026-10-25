const PORTFOLIO_PROFILES = {
    professional: {
        id: 'professional',
        guid: 'c894ada7-40ea-49ba-9699-04a7025c8305',
        sections: {
            professionalExperience: true,
            internships: true,
            projects: true,
            education: true,
            certificates: true,
            technicalSkills: true,
        },
    },
    ausbildung: {
        id: 'ausbildung',
        guid: 'acbcc206-6ee8-4e98-ac05-11dd5c89b4e2',
        sections: {
            professionalExperience: false,
            internships: true,
            projects: true,
            education: true,
            certificates: true,
            technicalSkills: true,
        },
    },
}

const { PROJECT_IDS, STATIC_PAGES, resolvePortfolioPage } = require('./portfolioPaths')

function listProfiles() {
    return Object.values(PORTFOLIO_PROFILES)
}

function getProfileById(id) {
    if (!id) return null
    return listProfiles().find((profile) => profile.id === id) || null
}

function getProfileByGuid(guid) {
    if (!guid || typeof guid !== 'string') return null
    return listProfiles().find((profile) => profile.guid === guid) || null
}

const LOCALES = ['fr', 'en', 'de']

function withLocales(paths) {
    return paths.flatMap((entry) => LOCALES.map((locale) => ({
        ...entry,
        locale,
    })))
}

function portfolioIndexPaths() {
    return {
        paths: withLocales(listProfiles().map((profile) => ({
            params: { guid: profile.guid },
        }))),
        fallback: 'blocking',
    }
}

function portfolioSlugPaths() {
    const paths = []
    listProfiles().forEach((profile) => {
        STATIC_PAGES.forEach((page) => {
            paths.push({ params: { guid: profile.guid, slug: [page] } })
        })
        PROJECT_IDS.forEach((id) => {
            paths.push({ params: { guid: profile.guid, slug: ['project', id] } })
        })
    })
    return { paths: withLocales(paths), fallback: 'blocking' }
}

const EMPLOYMENT_COPY_KEYS = [
    'experience1Title',
    'experience1Company',
    'experience1Date',
    'experience1Description',
    'homeIntro',
    'aboutDescription',
    'professionalExperience',
]

function omitEmploymentCopy(pageProps, profile) {
    if (!profile || profile.sections.professionalExperience) return pageProps
    const cloned = JSON.parse(JSON.stringify(pageProps))
    const store = cloned && cloned._nextI18Next && cloned._nextI18Next.initialI18nStore
    if (!store) return cloned
    Object.keys(store).forEach((locale) => {
        const namespaces = store[locale] || {}
        Object.keys(namespaces).forEach((namespace) => {
            EMPLOYMENT_COPY_KEYS.forEach((key) => {
                if (namespaces[namespace] && Object.prototype.hasOwnProperty.call(namespaces[namespace], key)) {
                    delete namespaces[namespace][key]
                }
            })
        })
    })
    return cloned
}

function portfolioStaticProps(guid, slug) {
    const profile = getProfileByGuid(guid)
    const page = resolvePortfolioPage(slug)
    if (!profile || !page) return { notFound: true }
    if ((page.key === 'works' || page.key === 'project') && !profile.sections.projects) {
        return { notFound: true }
    }
    return { profile, page }
}

module.exports = {
    PORTFOLIO_PROFILES,
    PROJECT_IDS,
    getProfileById,
    getProfileByGuid,
    resolvePortfolioPage,
    portfolioIndexPaths,
    portfolioSlugPaths,
    portfolioStaticProps,
    omitEmploymentCopy,
}
