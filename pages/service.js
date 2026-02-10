import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Service() {
    const { t } = useTranslation('common')

    return (
        <>
             <Layout  maincls="main-homepage">
                <section className="service-area">
                    <div className="container">
                        <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> {t('serviceMyOfferings')} <img src="/assets/images/star-2.png" alt="Star" /></h1>
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-md-4">
                                <div className="service-sidebar" data-aos="fade-right">
                                    <div className="service-sidebar-inner shadow-box">
                                        <ul>
                                            <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 2048 2048"><path fill="white" d="M2048 896h-896V384H512v256h384v896H512v256h640v-640h896v896h-896v-128H384v-384H0V640h384V256h768V0h896zm-768-768v128h640V128zm0 256v384h640V384zm0 896v128h640v-128zm0 256v384h640v-384zm-512-128v-384H128v384zm0-640H128v128h640z"/></svg>
                                            {t('serviceDbDesign')}
                                            </li>
                                            <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em"  viewBox="0 0 2048 2048"><path fill="white" d="M1792 1280h256v768H1024v-768h256v-256h512zm-384 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm-768-256v128h768v-128zM896 896q0 93-41 174t-117 136q45 23 85 53t73 67v338q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149H0q0-73 20-141t57-129t91-108t118-81q-75-54-116-135t-42-174q0-79 30-149t82-122t122-83t150-30q72 0 137 25t119 74q32-29 71-51q-34-35-52-81t-19-95q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100q0 49-18 95t-53 81q83 46 135 124q52-78 135-124q-34-35-52-81t-19-95q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100q0 49-18 95t-53 81q46 25 83 61t62 79t40 94t14 102h-128q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100h-128q0-53-20-99t-55-82t-81-55t-100-20q-49 0-95 18t-81 53q24 42 36 89t12 96m768-640q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10m-640 0q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10m-512 896q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20"/></svg>
                                            {t('serviceProjectMgmt')}
                                            </li>
                                            <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em"  viewBox="0 0 384 512"><path fill="white" d="M14 95.792C14 42.888 56.888 0 109.793 0h164.368c52.905 0 95.793 42.888 95.793 95.792c0 33.5-17.196 62.984-43.243 80.105c26.047 17.122 43.243 46.605 43.243 80.105c0 52.905-42.888 95.793-95.793 95.793h-2.08c-24.802 0-47.403-9.426-64.415-24.891v88.263c0 53.61-44.009 96.833-97.357 96.833C57.536 512 14 469.243 14 416.207c0-33.498 17.195-62.98 43.24-80.102C31.194 318.983 14 289.5 14 256.002c0-33.5 17.196-62.983 43.243-80.105C31.196 158.776 14 129.292 14 95.792m162.288 95.795h-66.495c-35.576 0-64.415 28.84-64.415 64.415c0 35.438 28.617 64.192 64.003 64.414l.412-.001h66.495zm31.378 64.415c0 35.575 28.839 64.415 64.415 64.415h2.08c35.576 0 64.415-28.84 64.415-64.415s-28.839-64.415-64.415-64.415h-2.08c-35.576 0-64.415 28.84-64.415 64.415m-97.873 95.793l-.412-.001c-35.386.221-64.003 28.975-64.003 64.413c0 35.445 29.225 64.415 64.931 64.415c36.282 0 65.979-29.436 65.979-65.455v-63.372zm0-320.417c-35.576 0-64.415 28.84-64.415 64.414c0 35.576 28.84 64.415 64.415 64.415h66.495V31.377zm97.873 128.829h66.495c35.576 0 64.415-28.839 64.415-64.415c0-35.575-28.839-64.414-64.415-64.414h-66.495z"/></svg>
                                            {t('serviceFigma')}
                                            </li>
                                            <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="white"><path d="M20 14.5v-8c0-1.886 0-2.828-.586-3.414S17.886 2.5 16 2.5H8c-1.886 0-2.828 0-3.414.586S4 4.614 4 6.5v8m-.502 1.015L4.02 14.5h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989"/><path d="m15.5 7l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L15.5 10m-7-3l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707L8.5 10M13 6l-2 5"/></g></svg>
                                            {t('serviceDevelopment')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="col-md-8">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> {t('serviceMyOfferings')} <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="service-content-wrap" data-aos="zoom-in">
                                    <div className="service-content-inner shadow-box">
                                        <div className="service-items">
                                            <div className="service-item">
                                                <h3>{t('serviceDbDesign')}</h3>
                                                <p>{t('serviceDbDesignDesc')}</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>{t('serviceProjectMgmt')}</h3>
                                                <p>{t('serviceProjectMgmtDesc')}</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>{t('serviceFigma')}</h3>
                                                <p>{t('serviceFigmaDesc')}</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>{t('serviceDevelopment')}</h3>
                                                <p>{t('serviceDevelopmentDesc')}</p>
                                            </div>
                                        </div>
                                    </div>
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
