import React from 'react';
import './Sidebar.css';

export default function Sidebar({ isDarkMode,isOpen, toggleSidebar, scrollToAbout, 
    scrollToExperience, scrollToSkills, scrollToEducation, scrollToContact }) {
    return (
        <div className={isDarkMode?`sidebar ${isOpen ? 'open' : ''}`:`sidebar-light ${isOpen ? 'open' : ''}`}>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToAbout(); toggleSidebar(); }}>ABOUT ME</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"}onClick={() => { scrollToExperience(); toggleSidebar(); }}>EXPERIENCE</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToSkills(); toggleSidebar(); }}>SKILLS</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToEducation(); toggleSidebar(); }}>EDUCATION</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"}>PROJECT</button>
            <button className={isDarkMode?"sidebar-button":"sidebar-button-light"} onClick={() => { scrollToContact(); toggleSidebar(); }}>CONTACT</button>
        </div>
    );
}
