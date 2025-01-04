import { useState } from 'react';
import './Header.css';
import Sidebar from  '../Sidebar/Sidebar.jsx'
import githubLogo from '../logos/icons8-github.svg';
import linkedInLogo from '../logos/icons8-linkedin.svg';
import downloadLog from '../logos/icons8-download-26.png';
import contactLogo from '../logos/icons8-contact-50.png'

export default function Header({ scrollToAbout, scrollToEducation, scrollToContact, scrollToExperience, scrollToSkills }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="header-container">
            {/* Sidebar */}
            <Sidebar 
                isOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar}
                scrollToAbout={scrollToAbout}
                scrollToExperience={scrollToExperience}
                scrollToSkills={scrollToSkills}
                scrollToEducation={scrollToEducation}
                scrollToContact={scrollToContact}
            />
            <li className="header">
                <p className="name">SHUBHAM MISHRA</p>
                <button className="menu-btn" onClick={toggleSidebar}>&#9776;</button>

                <div className="header-button-container">
                    <button className="header-button" onClick={scrollToAbout}>ABOUT</button>
                    <button className="header-button" onClick={scrollToExperience}>EXPERIENCE</button>
                    <button className="header-button" onClick={scrollToSkills}>SKILLS</button>
                    <button className="header-button" onClick={scrollToEducation}>EDUCATION</button>
                    <button className="header-button">PROJECT</button>
                    <button className="header-button" onClick={scrollToContact}>CONTACT</button>
                </div>
            </li>
            <div className="intro-container">
                <div className="text-container">
                    <span className="intro-welcome">Welcome!</span><br />
                    <div className="header-intro">
                        <span>This is </span>
                        <span className="intro-profession">Shubham Mishra,</span><br />
                        <span>A professional</span><br />
                        <span className="intro-profession">Software Engineer.</span>
                    </div>
                    <div className="custom-button-container">
                        <a href={require('../resume.pdf')} download>
                            <button className="custom-button">
                                Get Resume
                                <img src={downloadLog} className="icon-small" />
                            </button>
                        </a>
                        <button className="custom-button" onClick={scrollToContact}>
                            Contact Me
                            <img src={contactLogo} className="icon-small" />
                            </button>
                    </div>
                </div>

                <div className="image-container">
                    <img src={require('../IMG_8536.jpg')} alt="Shubham Mishra" className="profile-picture" />
                    <div className="header-social-links">
                        <div className="header-contact-item">
                            <a href="https://github.com/Happytocode24" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" className="header-social-media-logo" />
                            </a>
                        </div>
                        <div className="header-contact-item">
                            <a href="https://www.linkedin.com/in/shubham-mishra-669726154/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedInLogo} alt="LinkedIn" className="header-social-media-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
