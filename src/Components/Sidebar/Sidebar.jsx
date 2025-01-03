import React from 'react';
import './Sidebar.css';

export default function Sidebar({ isOpen, toggleSidebar, scrollToAbout, scrollToExperience, scrollToSkills, scrollToEducation, scrollToContact }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>&times;</button>
            <button className="sidebar-button" onClick={() => { scrollToAbout(); toggleSidebar(); }}>ABOUT</button>
            <button className="sidebar-button" onClick={() => { scrollToExperience(); toggleSidebar(); }}>EXPERIENCE</button>
            <button className="sidebar-button" onClick={() => { scrollToSkills(); toggleSidebar(); }}>SKILLS</button>
            <button className="sidebar-button" onClick={() => { scrollToEducation(); toggleSidebar(); }}>EDUCATION</button>
            <button className="sidebar-button">PROJECT</button>
            <button className="sidebar-button" onClick={() => { scrollToContact(); toggleSidebar(); }}>CONTACT</button>
        </div>
    );
}
