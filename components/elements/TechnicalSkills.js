import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const skillsData = {
    frontend: {
        skills: [
            { name: 'HTML', percentage: 95 },
            { name: 'CSS', percentage: 90 },
            { name: 'JavaScript', percentage: 85 },
            { name: 'React', percentage: 80 },
        ]
    },
    backend: {
        skills: [
            { name: 'Laravel', percentage: 85 },
            { name: 'C#', percentage: 80 },
            { name: 'ASP.NET', percentage: 75 },
            { name: '.NET Core MVC', percentage: 80 },
            { name: '.NET Core Web API', percentage: 80 },
            { name: 'Python', percentage: 70 },
            { name: 'Odoo', percentage: 65 },
        ]
    },
    databases: {
        skills: [
            { name: 'MySQL', percentage: 85 },
            { name: 'SQL Server', percentage: 80 },
            { name: 'PostgreSQL', percentage: 75 },
            { name: 'UML', percentage: 80 },
        ]
    },
    tools: {
        skills: [
            { name: 'Git', percentage: 90 },
            { name: 'Scrum', percentage: 85 },
            { name: 'Docker', percentage: 70 },
            { name: 'Postman', percentage: 85 },
            { name: 'Installation de serveur', percentage: 75 },
        ]
    }
}

export default function TechnicalSkills() {
    const { t } = useTranslation('common')
    const [activeCategory, setActiveCategory] = useState(null)

    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category)
    }

    const handleKeyPress = (e, category) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleCategory(category)
        }
    }

    return (
        <div className="technical-skills-section">
            <h1 className="section-heading" data-aos="fade-up">
                <img src="/assets/images/star-2.png" alt="Star" /> 
                {t('technicalSkills')} 
                <img src="/assets/images/star-2.png" alt="Star" />
            </h1>
            
            <div className="skills-accordion">
                {/* Frontend Category */}
                <div className="skill-category shadow-box" data-aos="zoom-in">
                    <div 
                        className={`category-header ${activeCategory === 'frontend' ? 'active' : ''}`}
                        onClick={() => toggleCategory('frontend')}
                        onKeyPress={(e) => handleKeyPress(e, 'frontend')}
                        role="button"
                        tabIndex={0}
                        aria-expanded={activeCategory === 'frontend'}
                    >
                        <div className="category-title">
                            <i className="iconoir-design-pencil" />
                            <h3>{t('skillsFrontend')}</h3>
                        </div>
                        <div className="category-icon">
                            <i className={`iconoir-nav-arrow-${activeCategory === 'frontend' ? 'down' : 'right'}`} />
                        </div>
                    </div>
                    
                    <div className={`category-content ${activeCategory === 'frontend' ? 'expanded' : ''}`}>
                        {skillsData.frontend.skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                <div className="skill-progress">
                                    <div 
                                        className="skill-progress-bar" 
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Category */}
                <div className="skill-category shadow-box" data-aos="zoom-in">
                    <div 
                        className={`category-header ${activeCategory === 'backend' ? 'active' : ''}`}
                        onClick={() => toggleCategory('backend')}
                        onKeyPress={(e) => handleKeyPress(e, 'backend')}
                        role="button"
                        tabIndex={0}
                        aria-expanded={activeCategory === 'backend'}
                    >
                        <div className="category-title">
                            <i className="iconoir-code" />
                            <h3>{t('skillsBackend')}</h3>
                        </div>
                        <div className="category-icon">
                            <i className={`iconoir-nav-arrow-${activeCategory === 'backend' ? 'down' : 'right'}`} />
                        </div>
                    </div>
                    
                    <div className={`category-content ${activeCategory === 'backend' ? 'expanded' : ''}`}>
                        {skillsData.backend.skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                <div className="skill-progress">
                                    <div 
                                        className="skill-progress-bar" 
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Databases Category */}
                <div className="skill-category shadow-box" data-aos="zoom-in">
                    <div 
                        className={`category-header ${activeCategory === 'databases' ? 'active' : ''}`}
                        onClick={() => toggleCategory('databases')}
                        onKeyPress={(e) => handleKeyPress(e, 'databases')}
                        role="button"
                        tabIndex={0}
                        aria-expanded={activeCategory === 'databases'}
                    >
                        <div className="category-title">
                            <i className="iconoir-database" />
                            <h3>{t('skillsDatabases')}</h3>
                        </div>
                        <div className="category-icon">
                            <i className={`iconoir-nav-arrow-${activeCategory === 'databases' ? 'down' : 'right'}`} />
                        </div>
                    </div>
                    
                    <div className={`category-content ${activeCategory === 'databases' ? 'expanded' : ''}`}>
                        {skillsData.databases.skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                <div className="skill-progress">
                                    <div 
                                        className="skill-progress-bar" 
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools Category */}
                <div className="skill-category shadow-box" data-aos="zoom-in">
                    <div 
                        className={`category-header ${activeCategory === 'tools' ? 'active' : ''}`}
                        onClick={() => toggleCategory('tools')}
                        onKeyPress={(e) => handleKeyPress(e, 'tools')}
                        role="button"
                        tabIndex={0}
                        aria-expanded={activeCategory === 'tools'}
                    >
                        <div className="category-title">
                            <i className="iconoir-tools" />
                            <h3>{t('skillsTools')}</h3>
                        </div>
                        <div className="category-icon">
                            <i className={`iconoir-nav-arrow-${activeCategory === 'tools' ? 'down' : 'right'}`} />
                        </div>
                    </div>
                    
                    <div className={`category-content ${activeCategory === 'tools' ? 'expanded' : ''}`}>
                        {skillsData.tools.skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                <div className="skill-progress">
                                    <div 
                                        className="skill-progress-bar" 
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .technical-skills-section {
                    margin-top: 40px;
                }

                .skills-accordion {
                    display: grid;
                    gap: 24px;
                    margin-top: 30px;
                }

                .skill-category {
                    background: var(--bg-card);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .category-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    user-select: none;
                }

                .category-header:hover {
                    background: var(--bg-body);
                }

                .category-header:focus {
                    outline: 2px solid var(--primary-color);
                    outline-offset: -2px;
                }

                .category-title {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .category-title i {
                    font-size: 24px;
                    color: var(--primary-color);
                }

                .category-title h3 {
                    margin: 0;
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--text-color);
                }

                .category-icon i {
                    font-size: 20px;
                    color: var(--text-muted);
                    transition: transform 0.3s ease;
                }

                .category-header.active .category-icon i {
                    transform: rotate(0deg);
                }

                .category-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease, padding 0.4s ease;
                    padding: 0 30px;
                }

                .category-content.expanded {
                    max-height: 1000px;
                    padding: 0 30px 25px;
                }

                .skill-item {
                    margin-bottom: 20px;
                }

                .skill-item:last-child {
                    margin-bottom: 0;
                }

                .skill-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                }

                .skill-name {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--text-color);
                }

                .skill-percentage {
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--primary-color);
                }

                .skill-progress {
                    width: 100%;
                    height: 8px;
                    background: var(--bg-body);
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }

                .skill-progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color, var(--primary-color)));
                    border-radius: 10px;
                    transition: width 0.8s ease;
                    box-shadow: 0 0 10px rgba(var(--primary-color-rgb, 255, 107, 107), 0.3);
                }

                @media (max-width: 768px) {
                    .category-header {
                        padding: 15px 20px;
                    }

                    .category-title h3 {
                        font-size: 18px;
                    }

                    .category-title i {
                        font-size: 20px;
                    }

                    .category-content {
                        padding: 0 20px;
                    }

                    .category-content.expanded {
                        padding: 0 20px 20px;
                    }
                }
            `}</style>
        </div>
    )
}
