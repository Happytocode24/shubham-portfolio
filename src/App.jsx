
import { useRef } from 'react';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Conatct from './Components/Contact/Contact';

function App() {
  const aboutRef=useRef(null);
  const EducationRef=useRef(null);
  const ContactRef=useRef(null);
  const ExperienceRef=useRef(null);
  const skillsRef=useRef(null);
  const scrollToAbout=()=>{
    aboutRef.current.scrollIntoView( {behavior: 'smooth' });
  }
  const scrollToEducation=()=>{
    EducationRef.current.scrollIntoView({behavior: 'smooth' });
  }
  const scrollToContact=()=>{
    ContactRef.current.scrollIntoView({behavior: 'smooth' });
  }
  const scrollToExperience=()=>{
    ExperienceRef.current.scrollIntoView({behavior: 'smooth' });
  }

  const scrollToSkills=()=>{
    skillsRef.current.scrollIntoView({behavior: 'smooth' });
  }
return (
  <div className='app-container'>
<Header scrollToAbout={scrollToAbout} 
scrollToEducation={scrollToEducation} 
scrollToContact={scrollToContact}
scrollToExperience={scrollToExperience}
scrollToSkills={scrollToSkills}
/>
<About  ref={aboutRef} />
<Experience ref ={ExperienceRef}></Experience>
<Skills ref ={skillsRef}></Skills>
<Education ref={EducationRef}></Education>
<Conatct ref={ContactRef}></Conatct>

<hr className="footer-line" />

<footer className="footer-text">
        &copy;2024 portfolio developed by <span className="highlight-name">Shubham Mishra</span>
      </footer>
  </div>
)
}
export default App;
