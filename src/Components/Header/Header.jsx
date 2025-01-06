import { useState } from 'react';
import './Header.css';
import Sidebar from  '../Sidebar/Sidebar.jsx'
import githubLogo from '../logos/icons8-github.svg';
import linkedInLogo from '../logos/icons8-linkedin.svg';
import downloadLog from '../logos/icons8-download-26.png';
import contactLogo from '../logos/icons8-contact-50.png'
import githubLogoLight from '../logos/githubLight.svg'
import linkedInLogoLight from '../logos/LinkedInLight.svg'

export default function Header({ isDarkMode,toggleDarkMode, scrollToAbout, scrollToEducation, scrollToContact, scrollToExperience, scrollToSkills }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="header-container">
            <Sidebar 
                isDarkMode={isDarkMode}
                isOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar}
                scrollToAbout={scrollToAbout}
                scrollToExperience={scrollToExperience}
                scrollToSkills={scrollToSkills}
                scrollToEducation={scrollToEducation}
                scrollToContact={scrollToContact}
            />
            <li className={isDarkMode?"header":"header-light"}>
                <p className={isDarkMode?"name":'name-light'}>SHUBHAM MISHRA</p>
                <button 
                    className={isDarkMode ? "menu-btn" : "menu-btn-light"} 
                    onClick={toggleSidebar}
                    >
                    {isSidebarOpen ? '×' : '☰'}
                    </button>

                <div className="header-button-container">
                    <button 
                    className={isDarkMode?"header-button":'header-button-light'} 
                    onClick={scrollToAbout}
                    >ABOUT
                    </button>
                    <button className={isDarkMode?"header-button":'header-button-light'}  onClick={scrollToExperience}>EXPERIENCE</button>
                    <button className={isDarkMode?"header-button":'header-button-light'}  onClick={scrollToSkills}>SKILLS</button>
                    <button className={isDarkMode?"header-button":'header-button-light'}  onClick={scrollToEducation}>EDUCATION</button>
                    <button className={isDarkMode?"header-button":'header-button-light'} >PROJECT</button>
                    <button className={isDarkMode?"header-button":'header-button-light'}  onClick={scrollToContact}>CONTACT</button>
                </div>

                <div className='switch-container'>
                <label className="switch">
                <input type="checkbox" checked={!isDarkMode} onChange={toggleDarkMode} />
                <span className={isDarkMode?"slider round":"slider-light round"}></span>
                </label>
      </div>
            </li>
            <hr className={isDarkMode?"header-line":"header-line-light"}/>
            <div className={isDarkMode?"intro-container":"intro-container-light"}>
                <div className="text-container">
                    <span className={isDarkMode?"intro-welcome":"intro-welcome-light"}>Welcome!</span><br />
                    <div className="header-intro">
                        <span>This is </span>
                        <span className={isDarkMode?"intro-profession":"intro-profession-light"}>Shubham Mishra,</span><br />
                        <span>A professional</span><br />
                        <span className={isDarkMode?"intro-profession":"intro-profession-light"}>Software Engineer.</span>
                    </div>
                    <div className="custom-button-container">
                        <a href={require('../resume.pdf')} download>
                            <button className={isDarkMode?"custom-button":"custom-button-light" }>
                                Get Resume
                                <img src={downloadLog} alt="ResumeDownload"className="icon-small" />
                            </button>
                        </a>
                        <button className={isDarkMode?"custom-button":"custom-button-light" }onClick={scrollToContact}>
                            Contact Me
                            <img src={contactLogo} alt="Contact" className="icon-small" />
                            </button>
                    </div>
                </div>

                <div className="image-container">
                    <img src={require('../IMG_8536.jpg')} alt="Shubham Mishra" 
                    className={isDarkMode?"profile-picture":"profile-picture-light"}
                    
                    />
                    <div className="header-social-links">
                        <div className="header-contact-item">
                            <a href="https://github.com/Happytocode24" target="_blank" rel="noopener noreferrer">
                                <img src={isDarkMode?githubLogo:githubLogoLight} alt="GitHub" className="header-social-media-logo" />
                            </a>
                        </div>
                        <div className="header-contact-item">
                            <a href="https://www.linkedin.com/in/shubham-mishra-669726154/" target="_blank" rel="noopener noreferrer">
                                <img src={isDarkMode?linkedInLogo:linkedInLogoLight} alt="LinkedIn" className="header-social-media-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
