import { useRef, useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark mode

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToEducation = () => educationRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToExperience = () => experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToSkills = () => skillsRef.current.scrollIntoView({ behavior: 'smooth' });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-container" style={{ backgroundColor: isDarkMode ? "rgb(5, 5, 60)" : "rgb(55, 55, 121)" }}>
      <div className='switch-container'>
      <label className="switch">
        <input type="checkbox" checked={!isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      </div>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToEducation={scrollToEducation}
        scrollToContact={scrollToContact}
        scrollToExperience={scrollToExperience}
        scrollToSkills={scrollToSkills}
      />

      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Education ref={educationRef} />
      <Contact ref={contactRef} />

      <hr className="footer-line" />

      <footer className="footer-text">
        &copy;2024 portfolio developed by <span className="highlight-name">Shubham Mishra</span>
      </footer>
    </div>
  );
}

export default App;
