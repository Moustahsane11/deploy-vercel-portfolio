import { createContext, useContext } from 'react'

const PortfolioProfileContext = createContext(null)

export function PortfolioProfileProvider({ profile, children }) {
    return (
        <PortfolioProfileContext.Provider value={profile || null}>
            {children}
        </PortfolioProfileContext.Provider>
    )
}

export function usePortfolioProfile() {
    return useContext(PortfolioProfileContext)
}

export function useSectionVisibility() {
    const profile = usePortfolioProfile()
    if (!profile) {
        return {
            isProfile: false,
            professionalExperience: true,
            internships: true,
            projects: true,
            education: true,
            certificates: true,
            technicalSkills: true,
        }
    }
    return {
        isProfile: true,
        ...profile.sections,
    }
}
