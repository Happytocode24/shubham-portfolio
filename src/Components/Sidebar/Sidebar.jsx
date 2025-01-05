import React from 'react';
import './Sidebar.css';

export default function Sidebar({ isDarkMode,isOpen, toggleSidebar, scrollToAbout, scrollToExperience, scrollToSkills, scrollToEducation, scrollToContact }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className={isDarkMode?"close-btn":"close-btn-light"} onClick={toggleSidebar}>&times;</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToAbout(); toggleSidebar(); }}>ABOUT</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"}onClick={() => { scrollToExperience(); toggleSidebar(); }}>EXPERIENCE</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToSkills(); toggleSidebar(); }}>SKILLS</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToEducation(); toggleSidebar(); }}>EDUCATION</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"}>PROJECT</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToContact(); toggleSidebar(); }}>CONTACT</button>
        </div>
    );
}
