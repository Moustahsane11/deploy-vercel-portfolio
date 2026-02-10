import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');

    return (
        <>
             <Layout  maincls="main-aboutpage">
                <section className="credential-area">
                    <div className="container">
                        <div className="gx-row d-flex">
                            <div className="credential-sidebar-wrap" data-aos="zoom-in">
                                <div className="credential-sidebar text-center">
                                    <div className="shadow-box">
                                        <div className="img-box">
                                            <img src="/assets/images/me.png" alt="About Me" />
                                        </div>
                                        <h2>{t('name')}</h2>
                                        <p>@MSTN</p>
                                        <ul className="social-links d-flex justify-content-center">
                                            <li><Link href="https://www.linkedin.com/in/mustapha-moustahsane-527b3a2b6/" target="_blank" rel="noopener noreferrer"><i className="iconoir-linkedin" /></Link></li>
                                            <li><Link href="https://x.com/mustaphamstn" target="_blank" rel="noopener noreferrer"><i className="iconoir-twitter" /></Link></li>
                                            <li><Link href="https://rb.gy/l9qjbn" target="_blank" rel="noopener noreferrer"><i className="iconoir-internet" /></Link></li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn">{t('contactMe')}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="credential-content flex-1">
                                <div className="credential-about" data-aos="zoom-in">
                                    <h2>{t('aboutMe')}</h2>
                                    <p>{t('aboutDescription')}</p>
                                </div>
                                <div className="credential-edc-exp credential-experience">
                                    <h2 data-aos="fade-up">{t('experience')}</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2007 - 2017</h4>
                                        <h3>{t('experience1Title')}</h3>
                                        <h5>{t('experience1Company')}</h5>
                                        <p>{t('experience1Description')}</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2017 - 2023</h4>
                                        <h3>{t('experience2Title')}</h3>
                                        <h5>{t('experience2Company')}</h5>
                                        <p>{t('experience2Description')}</p>
                                    </div>
                                </div>
                                <div className="credential-edc-exp credential-education">
                                    <h2 data-aos="fade-up">{t('education')}</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2019 - 2020 </h4>
                                        <h3>{t('education1Title')}</h3>
                                        <h5>{t('education1Institution')}</h5>
                                        <p>{t('education1Description')}</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2021 - 2023</h4>
                                        <h3>{t('education2Title')}</h3>
                                        <h5>{t('education2Institution')}</h5>
                                        <p>{t('education2Description')}</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2023 - {t('present')}</h4>
                                        <h3>{t('education3Title')}</h3>
                                        <h5>{t('education3Institution')}</h5>
                                        <p>{t('education3Description')}</p>
                                    </div>
                                </div>
                                <div className="skills-wrap">
                                    <h2 data-aos="fade-up">{t('skills')}</h2>
                                    <div className="d-grid skill-items gap-24 flex-wrap">
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">85%</span>
                                            <h3 className="name">Html-Css</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">78%</span>
                                            <h3 className="name">Php-Larvel</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">92%</span>
                                            <h3 className="name">C#-.Net</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">70%</span>
                                            <h3 className="name">WordPress</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">60%</span>
                                            <h3 className="name">React</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">87%</span>
                                            <h3 className="name">SQL</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">80%</span>
                                            <h3 className="name">JavaScript</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">45%</span>
                                            <h3 className="name">Java-Spring boot</h3>
                                            <p>{t('skillDescription')}</p>
                                        </div>                                                                    
                                    </div>
                                </div>
                                <div className="skills-wrap awards-wrap">
                                    <h2 data-aos="fade-up">{t('awards')}</h2>
                                    <div className="d-grid skill-items gap-24 flex-wrap">
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">14 May 2020</span>
                                            <h3 className="name">Bluebase</h3>
                                            <p>{t('awardDescription')}</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">26 June 2018</span>
                                            <h3 className="name">Demble</h3>
                                            <p>{t('awardDescription')}</p>
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
  };
}