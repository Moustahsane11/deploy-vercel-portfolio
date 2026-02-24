import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

export default function Contact() {
    const { t } = useTranslation('common')
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ show: false, success: false, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    show: true,
                    success: true,
                    message: data.message || t('contactMessageSent')
                })
                setFormData({ fullName: '', email: '', subject: '', message: '' })
            } else {
                setSubmitStatus({
                    show: true,
                    success: false,
                    message: data.message || t('contactMessageError')
                })
            }
        } catch (error) {
            setSubmitStatus({
                show: true,
                success: false,
                message: t('contactMessageError')
            })
        } finally {
            setIsSubmitting(false)
            setTimeout(() => {
                setSubmitStatus({ show: false, success: false, message: '' })
            }, 5000)
        }
    }

    return (
        <>
            <Layout  maincls="main-aboutpage">
                <section className="contact-area">
                    <div className="container">
                        <div className="gx-row d-flex justify-content-between gap-24">
                            <div className="contact-infos">
                                <h3 data-aos="fade-up">{t('contactInfo')}</h3>
                                <ul className="contact-details">
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-mail" />
                                        </div>
                                        <div className="right">
                                            <span>{t('contactMailUs')}</span>
                                            <h4>{t('email')}</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-phone" />
                                        </div>
                                        <div className="right">
                                            <span>{t('contactCallUs')}</span>
                                            <h4>{t('phone')}</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-pin-alt" />
                                        </div>
                                        <div className="right">
                                            <span>{t('contactLocation')}</span>
                                            <h4>{t('location')}</h4>
                                        </div>
                                    </li>
                                </ul>
                                <h3 data-aos="fade-up">{t('contactSocialInfo')}</h3>
                                <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                    <li><Link className="shadow-box" href="https://www.linkedin.com/in/mustapha-moustahsane-527b3a2b6/" target="_blank" rel="noopener noreferrer"><i className="iconoir-linkedin" /></Link></li>
                                    <li><Link className="shadow-box" href="https://x.com/mustaphamstn" target="_blank" rel="noopener noreferrer"><i className="iconoir-twitter" /></Link></li>
                                    <li><Link className="shadow-box" href="https://moustahsane.vercel.app/de/contact" target="_blank" rel="noopener noreferrer"><i className="iconoir-internet" /></Link></li>
                                </ul>
                            </div>
                            <div data-aos="zoom-in" className="contact-form">
                                <div className="shadow-box">
                                    <h1>{t('contactLetsWork')}</h1>
                                    <form onSubmit={handleSubmit}>
                                        {submitStatus.show && (
                                            <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-danger'} messenger-box-contact__msg`} role="alert">
                                                {submitStatus.message}
                                            </div>
                                        )}
                                        <div className="input-group">
                                            <input 
                                                type="text" 
                                                name="fullName" 
                                                id="full-name" 
                                                placeholder={t('contactName')}
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                placeholder={t('contactEmail')}
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                id="subject" 
                                                placeholder={t('contactSubject')}
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <textarea 
                                                name="message" 
                                                id="message" 
                                                placeholder={t('contactMessage')}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <button 
                                                className="theme-btn submit-btn" 
                                                name="submit" 
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? t('contactSending') || 'Sending...' : t('contactSend')}
                                            </button>
                                        </div>
                                    </form>
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
