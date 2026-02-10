import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import data from "../../util/Projects.json"
import ImageLightbox from "@/components/elements/ImageLightbox"

export default function ProjectDetails() {
    const { t } = useTranslation('common')
    let Router = useRouter()
    const [project, setProject] = useState(null)
    const [nextProject, setNextProject] = useState(null)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const { id } = Router.query

    useEffect(() => {
        if (id) {
            const currentProject = data.find((item) => item.id == id)
            setProject(currentProject)
            
            // Find next project
            const currentIndex = data.findIndex((item) => item.id == id)
            const nextIndex = (currentIndex + 1) % data.length
            setNextProject(data[nextIndex])
        }
    }, [id])

    // Open lightbox with specific image index
    const openLightbox = (index) => {
        setLightboxIndex(index)
        setLightboxOpen(true)
    }

    // Get all gallery images array
    const getGalleryImages = () => {
        if (!project) return []
        return [
            project.image2,
            project.image3,
            project.image4,
            project.image5,
            project.image6
        ]
    }

    return (
        <>
            <Layout footerStyle={1}>
                {project && (
                    <>
                        <section className="project-details-wrap">
                            {/* Main Header Project Image */}
                            <div className="project-details-img" data-aos="zoom-in">
                                <img src={project.headerImage} alt="Project Details" />
                            </div>
                            
                            <div className="container">
                                {/* Project Info Section */}
                                <div data-aos="zoom-in">
                                    <div className="d-flex project-infos-wrap shadow-box mb-24">
                                        <img src="/assets/images/icon2.png" alt="Icon" />
                                        
                                        <div className="project-details-info flex-1">
                                            <h3>{t(`project${project.id}StudioName`)}</h3>
                                            <p>{t(`project${project.id}StudioDescription1`)}</p>
                                            <p>{t(`project${project.id}StudioDescription2`)}</p>
                                        </div>
                                        
                                        <div className="project-details-info flex-1">
                                            <h3>{t('projectAbout')}</h3>
                                            <p>{t(`project${project.id}AboutDescription1`)}</p>
                                            <p>{t(`project${project.id}AboutDescription2`)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Full Width Image */}
                                <div 
                                    className="project-details-2-img mb-24 clickable-image" 
                                    data-aos="zoom-in"
                                    onClick={() => openLightbox(0)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => e.key === 'Enter' && openLightbox(0)}
                                >
                                    <img src={project.image2} alt="Project" />
                                    <div className="image-overlay">
                                        <i className="iconoir-expand"></i>
                                    </div>
                                </div>

                                {/* Gallery Images - First Row */}
                                <div className="row mb-24">
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div 
                                            className="project-details-3-img clickable-image"
                                            onClick={() => openLightbox(1)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyPress={(e) => e.key === 'Enter' && openLightbox(1)}
                                        >
                                            <img src={project.image3} alt="Project" />
                                            <div className="image-overlay">
                                                <i className="iconoir-expand"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div 
                                            className="project-details-3-img clickable-image"
                                            onClick={() => openLightbox(2)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyPress={(e) => e.key === 'Enter' && openLightbox(2)}
                                        >
                                            <img src={project.image4} alt="Project" />
                                            <div className="image-overlay">
                                                <i className="iconoir-expand"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Images - Second Row */}
                                <div className="row mb-24">
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div 
                                            className="project-details-3-img clickable-image"
                                            onClick={() => openLightbox(3)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyPress={(e) => e.key === 'Enter' && openLightbox(3)}
                                        >
                                            <img src={project.image5} alt="Project" />
                                            <div className="image-overlay">
                                                <i className="iconoir-expand"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div 
                                            className="project-details-3-img clickable-image"
                                            onClick={() => openLightbox(4)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyPress={(e) => e.key === 'Enter' && openLightbox(4)}
                                        >
                                            <img src={project.image6} alt="Project" />
                                            <div className="image-overlay">
                                                <i className="iconoir-expand"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details Box */}
                                <div data-aos="zoom-in">
                                    <div className="project-about-2 d-flex shadow-box mb-24">
                                        <div className="left-details">
                                            <img src="/assets/images/icon3.png" alt="Icon" />
                                            <ul>
                                                <li>
                                                    <p>{t('projectYear')}</p>
                                                    <h4>{project.year}</h4>
                                                </li>
                                                <li>
                                                    <p>{t('projectClient')}</p>
                                                    <h4>{t(`project${project.id}Client`)}</h4>
                                                </li>
                                                <li>
                                                    <p>{t('projectServices')}</p>
                                                    <h4>{t(`project${project.id}Services`)}</h4>
                                                </li>
                                                <li>
                                                    <p>{t('projectType')}</p>
                                                    <h4>{t(`project${project.id}ProjectType`)}</h4>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div className="right-details">
                                            <h3>{t('projectDescription')}</h3>
                                            <p>{t(`project${project.id}DetailsDescription1`)}</p>
                                            <p>{t(`project${project.id}DetailsDescription2`)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Full Width Project Image */}
                            {/* <div className="project-details-img" data-aos="zoom-in">
                                <img src={project.bottomImage} alt="Project Details" />
                            </div> */}

                            {/* Next Project Button */}
                            <div className="container d-flex align-items-center justify-content-center" data-aos="zoom-in">
                                {nextProject ? (
                                    <Link href={`/project/${nextProject.id}`} className="big-btn shadow-box">
                                        {t('nextProject')}
                                    </Link>
                                ) : (
                                    <Link href="/projects" className="big-btn shadow-box">
                                        {t('viewAllProjects')}
                                    </Link>
                                )}
                            </div>
                        </section>

                        {/* Lightbox Modal */}
                        {lightboxOpen && (
                            <ImageLightbox
                                images={getGalleryImages()}
                                currentIndex={lightboxIndex}
                                onClose={() => setLightboxOpen(false)}
                            />
                        )}
                    </>
                )}
            </Layout>
        </>
    )
}

export async function getServerSideProps({ locale, params }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}