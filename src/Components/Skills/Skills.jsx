import './Skills.css';
import React, { useRef, useState } from 'react';
import pythonLogo from '../logos/python.png';
import javascriptLogo from '../logos/js.png';
import htmlLogo from '../logos/html.png';
import typescriptLogo from '../logos/typescript.png';
import reactLogo from '../logos/atoms.png';
import nodeLogo from '../logos/node-js.png';
import angularLogo from '../logos/Angular.png';
import csslogo from '../logos/css-3.png';
import flasklogo from '../logos/icons8-flask-64.png';
import MLlogo from '../logos/coding.png';
import AIlogo from '../logos/artifcial-intelligence.png';
import systemdesignlogo from '../logos/settings.png';
import Sqllogo from '../logos/sql-server.png';
import jquerylogo from '../logos/jquery-sketch-symbol.png';

const skills = [
  { name: "JavaScript", logo: javascriptLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "ReactJS", logo: reactLogo },
  { name: "Angular", logo: angularLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: csslogo },
  { name: "Python", logo: pythonLogo },
  { name: "Flask", logo: flasklogo },
  { name: "Machine Learning", logo: MLlogo },
  { name: "Artificial Intelligence", logo: AIlogo },
  { name: "System Design", logo: systemdesignlogo },
  { name: "SQL", logo: Sqllogo },
  { name: "NodeJs", logo: nodeLogo },
  { name: "JQuery", logo: jquerylogo },
];

const Skills = React.forwardRef(({ isDarkMode }, ref) => {
  const skillsCarouselRef = useRef(null);
  
 // eslint-disable-next-line no-unused-vars
const [isAutoScrolling, setIsAutoScrolling] = useState(true);


  return (
    <div className="skills-container" ref={ref}>
      <h1 className={isDarkMode ? "skills-title" : "skills-title-light"}>Skills</h1>
      <div className={`skills-carousel ${isAutoScrolling ? 'auto-scroll' : ''}`} ref={skillsCarouselRef}>
        {[...skills, ...skills].map((skill, index) => (
          <div className={isDarkMode ? "skill-card" : "skill-card-light"} key={index}>
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <span className={isDarkMode ? "skill-name" : "skill-name-light"}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
