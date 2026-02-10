import Link from "next/link"
import { useTranslation } from 'next-i18next'

export default function Footer() {
    const { t } = useTranslation('common')

    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-content text-center">
                        <Link href="/" className="logo">
                            <img src="/assets/images/logo.png" alt="Logo" />
                        </Link>
                        <ul className="footer-menu">
                            <li><Link href="/">{t('navHome')}</Link></li>
                            <li><Link href="/about">{t('navAbout')}</Link></li>
                            <li><Link href="/works">{t('navWorks')}</Link></li>
                            <li><Link href="/contact">{t('navContact')}</Link></li>
                        </ul>
                        <p className="copyright">
                            © {t('footerRights')} <span>{t('name')}</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
