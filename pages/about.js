import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function About() {
    const { t } = useTranslation('common')

    return (
        <>
            <Layout maincls="main-aboutpage">

                <section className="about-area">
                    <div className="container">
                        <div className="d-flex about-me-wrap align-items-start gap-24">
                            <div data-aos="zoom-in">
                                <div className="about-image-box shadow-box">
                                    <div className="image-inner">
                                        <img src="/assets/images/me2.png" alt="About Me" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-details" data-aos="zoom-in">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> {t('aboutSelfSummary')} <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="about-details-inner shadow-box">
                                    <img src="/assets/images/icon2.png" alt="Star" />
                                    <h1>{t('name')}</h1>
                                    <p>{t('aboutDescription')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-experience shadow-box">
                                    <h3>{t('experience')}</h3>
                                    <ul>
                                        <li>
                                            <p className="date">{t('experience2Date')}</p>
                                            <h2>{t('experience2Title')}</h2>
                                            <p className="type">{t('experience2Company')}</p>
                                        </li>
                                        <li>
                                            <p className="date">{t('experience1Date')}</p>
                                            <h2>{t('experience1Title')}</h2>
                                            <p className="type">{t('experience1Company')}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-education shadow-box">
                                    <h3>{t('education')}</h3>
                                    <ul>
                                        <li>
                                            <p className="date">2023 - 2024</p>
                                            <h2>{t('education3Title')}</h2>
                                            <p className="type">{t('education3Institution')}</p>
                                        </li>
                                        <li>
                                            <p className="date">2021 - 2023</p>
                                            <h2>{t('education2Title')}</h2>
                                            <p className="type">{t('education2Institution')}</p>
                                        </li>
                                        <li>
                                            <p className="date">2020 - 2021</p>
                                            <h2>{t('education1bTitle')}</h2>
                                            <p className="type">{t('education1bInstitution')}</p>
                                        </li>
                                        <li>
                                            <p className="date">2019 - 2020</p>
                                            <h2>{t('education1Title')}</h2>
                                            <p className="type">{t('education1Institution')}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="d-flex profile-contact-credentials-wrap gap-24">
                                    <div data-aos="zoom-in">
                                        <div className="about-profile-box info-box shadow-box h-full">
                                            <div className="inner-profile-icons shadow-box">
                                                <Link href="https://www.linkedin.com/in/mustapha-moustahsane-527b3a2b6/" target="_blank" rel="noopener noreferrer">
                                                    <i className="iconoir-linkedin" />
                                                </Link>
                                                <Link href="https://x.com/mustaphamstn" target="_blank" rel="noopener noreferrer">
                                                    <i className="iconoir-twitter" />
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>{t('homeStayWithMe')}</h4>
                                                    <h1>{t('homeProfiles')}</h1>
                                                </div>
                                                <Link href="/contact" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-contact-box info-box shadow-box">
                                            <Link className="overlay-link" href="/contact" />
                                            <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                            <h1>{t('homeLetsWork')}</h1>
                                            <Link href="/contact" className="about-btn">
                                                <img src="/assets/images/icon.svg" alt="Button" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="h-full">
                                        <div className="about-crenditials-box info-box shadow-box">
                                            <Link className="overlay-link" href="/credentials" />
                                            <img src="/assets/images/sign.png" alt="Sign" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>{t('homeMoreAbout')}</h4>
                                                    <h1>{t('homeCredentials')}</h1>
                                                </div>
                                                <Link href="/credentials" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}