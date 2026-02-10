import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useRef, useEffect } from "react"
import ThemeSwitch from "../elements/ThemeSwitch"
import { useTranslation } from 'next-i18next';

export default function Header() {
    const router = useRouter()
    const { t, i18n } = useTranslation('common')
    const [isToggled, setToggled] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const languageDropdownRef = useRef(null)
    const [isDetecting, setIsDetecting] = useState(false)


    const handleToggle = () => setToggled(!isToggled)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Automatic language detection based on IP
    useEffect(() => {
        // Only detect on first load if no language is already set
        if (!router.isReady || router.locale) return;
        
        const detectLanguageByIP = async () => {
            if (isDetecting) return;
            
            setIsDetecting(true);
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                
                let detectedLang = 'en'; // Default: English
                
                // French-speaking countries (Morocco is default for portfolio owner)
                if (
                    data.country_code === 'FR' || 
                    data.country_code === 'BE' || 
                    data.country_code === 'LU' ||
                    data.country_code === 'MA' || // Morocco
                    data.country_code === 'DZ' || // Algeria
                    data.country_code === 'TN' || // Tunisia
                    data.country_code === 'SN' || // Senegal
                    data.country_code === 'CI'    // Ivory Coast
                ) {
                    detectedLang = 'fr';
                } 
                // German-speaking countries
                else if (data.country_code === 'DE' || data.country_code === 'AT' || data.country_code === 'CH') {
                    detectedLang = 'de';
                }
                
                // Vérifier que la langue détectée est supportée
                if (languages.some(lang => lang.code === detectedLang) && detectedLang !== router.locale) {
                    const { pathname, asPath, query } = router;
                    router.push({ pathname, query }, asPath, { locale: detectedLang });
                }
            } catch (error) {
                console.error('Error during IP-based language detection:', error);
            } finally {
                setIsDetecting(false);
            }
        };

        detectLanguageByIP();
    }, [router.isReady, router.locale]);

    const changeLanguage = (lng) => {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: lng });
        setToggled(false);
        setIsLanguageOpen(false);
    };

    const FlagIcons = {
        en: () => <img src="/assets/flags/english.svg" alt="English" width="16" height="12" />,
        fr: () => <img src="/assets/flags/frensh.svg" alt="Français" width="16" height="12" />,
        de: () => <img src="/assets/flags/deutsch.svg" alt="Deutsch" width="16" height="12" />,
    };

    const languages = [
        { code: 'en', name: 'English', flag: 'en' },
        { code: 'fr', name: 'Français', flag: 'fr' },
        { code: 'de', name: 'Deutsch', flag: 'de' },
    ];

    const currentLanguage = languages.find(lang => lang.code === router.locale) || languages[0];

    return (
        <>
            <header className="header-area">
                <div className="container">
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <Link href="/" className="logo">
                            <img src="/assets/images/logo.png" alt="Logo" />
                        </Link>

                        <nav className={isToggled ? "navbar active" : "navbar"}>
                            <ul className="menu">
                                <li className={router.pathname == "/" ? "active" : ""}><Link href="/">{t('navHome')}</Link></li>
                                <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about">{t('navAbout')}</Link></li>
                                <li className={router.pathname == "/works" ? "active" : ""}><Link href="/works">{t('navWorks')}</Link></li>
                                <li className={router.pathname == "/contact" ? "active" : ""}><Link href="/contact">{t('navContact')}</Link></li>

                                {/* Language Switcher in Mobile Menu */}
                                <li className="language-switcher-mobile">
                                    <span className="language-label">{t('HeadrLang')}: </span>
                                    <div className="language-select-mobile">
                                        <div className="select-wrapper">
                                            <select
                                                value={router.locale}
                                                onChange={(e) => changeLanguage(e.target.value)}
                                                className="language-select"
                                            >
                                                {languages.map((language) => (
                                                    <option key={language.code} value={language.code}>
                                                        {language.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="select-arrow">▼</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <Link href="/contact" className="theme-btn"></Link>
                        </nav>

                        <div className="header-actions">
                            <Link href="/contact" className="theme-btn desktop-btn">{t('letsTalk')}</Link>

                            {/* Language Switcher for Desktop */}
                            <div className="language-selector-desktop" ref={languageDropdownRef}>
                                <button
                                    className="language-current theme-btn"
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    aria-expanded={isLanguageOpen}
                                    aria-label="Change language"
                                >
                                    <span className="flag">
                                        {FlagIcons[currentLanguage.flag]()}
                                    </span>
                                    <span className="dropdown-arrow">▼</span>
                                </button>

                                {isLanguageOpen && (
                                    <div className="language-dropdown">
                                        {languages.map((language) => {
                                            const FlagComponent = FlagIcons[language.flag];
                                            return (
                                                <button
                                                    key={language.code}
                                                    className={`language-option ${router.locale === language.code ? 'active' : ''}`}
                                                    onClick={() => changeLanguage(language.code)}
                                                    aria-label={`Change language to ${language.name}`}
                                                >
                                                    <span className="flag">
                                                        <FlagComponent />
                                                    </span>
                                                    <span className="language-name">{language.name}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className={isToggled ? "show-menu active" : "show-menu"} onClick={handleToggle}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>

            <style jsx>{`
    .header-actions {
        display: flex;
        align-items: center;
        gap: 15px;
        position: relative;
    }
    
    .language-selector-desktop {
        position: relative;
        display: inline-block;
    }
    
    .language-selector-desktop .language-current {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        border-radius: 50px;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: none;
        transition: all 0.3s ease;
        min-width: auto;
        position: relative;
        z-index: 2;
    }
    
    .language-selector-desktop .language-current:hover {
        transform: translateY(-2px);
    }
    
    .flag {
        display: flex;
        align-items: center;
    }
    
    .flag img {
        border-radius: 2px;
        display: block;
    }
    
    .dropdown-arrow {
        font-size: 10px;
        transition: transform 0.3s ease;
        margin-left: 4px;
    }
    
    .language-selector-desktop:hover .dropdown-arrow,
    .language-selector-desktop .language-current[aria-expanded="true"] .dropdown-arrow {
        transform: rotate(180deg);
    }
    
    .language-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: var(--dropdown-bg, #ffffff);
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        min-width: 160px;
        margin-top: 10px;
        overflow: hidden;
        animation: fadeIn 0.2s ease;
        border: 1px solid var(--dropdown-border, #eaeaea);
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .language-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        width: 100%;
        border: none;
        background: transparent;
        text-align: left;
    }
    
    .language-option:hover {
        background: var(--dropdown-hover-bg, #f5f5f5);
    }
    
    .language-option.active {
        background: var(--dropdown-active-bg, #e9e9e9);
        font-weight: 600;
    }
    
    .language-name {
        font-size: 14px;
        font-weight: 500;
    }
    
    /* Style pour le select mobile */
    .language-switcher-mobile {
        display: none;
        padding: 15px 20px;
        margin-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .language-label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--text-color, #333);
    }
    
    .language-select-mobile {
        margin-top: 10px;
    }
    
    .select-wrapper {
        position: relative;
        width: 100%;
    }
    
    .language-select {
        width: 100%;
        padding: 12px 45px 12px 16px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        appearance: none;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: 2px solid var(--select-border, #e0e0e0);
        background: var(--select-bg, #ffffff);
        color: var(--select-color, #333);
    }
    
    .language-select:hover {
        border-color: var(--select-hover-border, #b3b3b3);
    }
    
    .language-select:focus {
        outline: none;
        border-color: var(--select-focus-border, #4d4d4d);
        box-shadow: 0 0 0 3px rgba(77, 77, 77, 0.1);
    }
    
    .select-arrow {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        font-size: 12px;
        color: var(--select-arrow-color, #666);
    }
    
    /* Style des options */
    .language-select option {
        padding: 12px 15px;
        font-size: 14px;
        font-weight: 500;
        background: var(--option-bg, #ffffff);
        color: var(--option-color, #333);
    }
    
    @media (max-width: 768px) {
        .language-selector-desktop {
            display: none;
        }
        
        .language-switcher-mobile {
            display: block;
        }
        
        .header-actions {
            gap: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        
        .header-actions .desktop-btn {
            display: none;
        }
        
        .header-actions > * {
            flex-shrink: 0;
        }
    }
    
    @media (max-width: 480px) {
        .header-actions {
            gap: 8px;
        }
        
        .language-select {
            padding: 10px 40px 10px 14px;
            font-size: 13px;
        }
        
        .select-arrow {
            right: 14px;
            font-size: 11px;
        }
    }
`}</style>
        </>
    )
}