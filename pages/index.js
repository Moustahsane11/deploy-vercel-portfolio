import Layout from "@/components/layout/Layout"
import Link from "next/link"
import TechnicalSkills from "@/components/elements/TechnicalSkills"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CountUp from 'react-countup'

export default function Home() {
    const { t } = useTranslation('common')

    return (
        <>
           <Layout  maincls="main-homepage">

                <section className="about-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-me-box shadow-box">
                                    <Link className="overlay-link" href="/about" />
                                    
                                    <div className="img-box">
                                        <img src="/assets/images/me.png" alt="About Me" />
                                    </div>
                                    <div className="infos">
                                        <h4>{t('homeRole')}</h4>
                                        <h1>{t('name')}.</h1>
                                        <p>{t('homeIntro')}</p>
                                        <Link href="/about" className="about-btn">
                                            <img src="/assets/images/icon.svg" alt="Button" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-credentials-wrap">
                                    <div data-aos="zoom-in">
                                        <div className="banner shadow-box">
                                            <div className="marquee">
                                                <div>
                                                    <span>{t('homeMarquee')} <b>{t('homeFeatured')}</b> <img src="/assets/images/star1.svg" alt="Star" /> {t('homeMarquee')} <b>{t('homeFeatured')}</b> <img src="/assets/images/star1.svg" alt="Star" /> {t('homeMarquee')} <b>{t('homeFeatured')}</b> <img src="/assets/images/star1.svg" alt="Star" /> {t('homeMarquee')} <b>{t('homeFeatured')}</b> {t('homeMarquee')} <img src="/assets/images/star1.svg" alt="Star" /> {t('homeMarquee')} <b>{t('homeFeatured')}</b> {t('homeMarquee')} <img src="/assets/images/star1.svg" alt="Star" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gx-row d-flex gap-24">
                                        <div data-aos="zoom-in">
                                    <div className="about-credentials-box info-box shadow-box h-full">

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
                                        <div data-aos="zoom-in">
                                            <div className="about-project-box info-box shadow-box h-full">
                                                <Link className="overlay-link" href="/works" />
                                                <img src="/assets/images/my-works.png" alt="My Works" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="infos">
                                                        <h4>{t('homeShowcase')}</h4>
                                                        <h1>{t('homeProjects')}</h1>
                                                    </div>
                                                    <Link href="#" className="about-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="blog-service-profile-wrap d-flex gap-24">
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-services-box info-box shadow-box h-full">
                                            <Link href="/service" className="overlay-link" />
                                            <div className="icon-boxes">
                                                <i className="iconoir-camera" />
                                                <i className="iconoir-design-pencil" />
                                                <i className="iconoir-color-filter" />
                                                <i className="iconoir-dev-mode-phone" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>{t('homeSpecialization')}</h4>

                                                    <h1>{t('homeServicesOffering')}</h1>
                                                </div>
                                                <Link href="/service" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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
                                                <Link href="/credentials" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Skills Section */}
                        <TechnicalSkills />

                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-client-box info-box shadow-box">
                                    <div className="clients d-flex align-items-start gap-24 justify-content-center">
                                        <div className="client-item">
                                            <h1>
                                                <CountUp start={0} end={2.5} decimals={1} duration={2} separator="," />
                                            </h1>
                                            <p>{t('homeYearsExp')}</p>
                                        </div>
                                        <div className="client-item">
                                            <h1>
                                                <CountUp start={0} end={10} duration={2} />+
                                            </h1>
                                            <p>{t('homeClients')}</p>
                                        </div>
                                        <div className="client-item">
                                            <h1>
                                                <CountUp start={0} end={15} duration={2} />+
                                            </h1>
                                            <p>{t('homeTotalProjects')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-contact-box info-box shadow-box">
                                    <Link className="overlay-link" href="/contact" />
                                    <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                    <h1>{t('homeLetsWork')}</h1>

                                    <Link href="/contact" className="about-btn">
                                        <img src="/assets/images/icon.svg" alt="Button" />
                                    </Link>
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
