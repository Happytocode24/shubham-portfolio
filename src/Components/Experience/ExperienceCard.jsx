import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ isDarkMode,work }) => {
  return (
    <div className={isDarkMode?"experience-card":"experience-card-light"}>
      <pre className="experience-details">
        <span className={isDarkMode?"const-color":"const-color-light"}>const</span> <span className={isDarkMode?"work-dark":"work-light"}>work </span><span className={isDarkMode?"equal-color":"equal-color-light"}>=</span> 
        <span className='curlly-braces'>{'{\n'}</span>
        &nbsp;&nbsp;
        <span className={isDarkMode?"braces-color":"braces-color-light"}>
          Organisation:</span> 
          <span className={isDarkMode?"value-color":"value-color-light"}>'{work.Organisation}'
          </span>
          <span className='curlly-braces'>{'{\n'}</span>
        &nbsp;&nbsp;
        <span className={isDarkMode?"braces-color":"braces-color-light"}>
          Preiod:</span> 
          <span className={isDarkMode?"value-color":"value-color-light"}>'{work.Period}'
          </span>
        <span className="value-color-light">,{'\n'}</span>
        &nbsp;&nbsp;<span className={isDarkMode?"braces-color":"braces-color-light"}>Location:</span> <span className={isDarkMode?"value-color":"value-color-light"}>'{work.Location}'</span>
        <span className="value-color-light">,{'\n'}</span>
        &nbsp;&nbsp;<span className={isDarkMode?"braces-color":"braces-color-light"}>projectName:</span> <span className={isDarkMode?"value-color":"value-color-light"}>'{work.projectName}'</span>
        <span className="value-color-light">,{'\n'}</span>
        &nbsp;&nbsp;<span className={isDarkMode?"braces-color":"braces-color-light"}>techStack:</span> <span className='curlly-braces'>[</span><span className={isDarkMode?"value-color":"value-color-light"}>
          {work.techStack.map((tech, index) => (
            <span  key={index}>
              '{tech}'{index < work.techStack.length - 1 ? ', ' : ''}
            </span>
          ))}
        </span><span className='curlly-braces'>],{'\n'}</span>
        &nbsp;&nbsp;<span className={isDarkMode?"braces-color":"braces-color-light"}>Description:</span> 
        <span className={isDarkMode?"value-color":"value-color-light"}>'{work.Description}'</span>
        {'\n'}
        <span className='curlly-braces'>{'};'}</span>
      </pre>
    </div>
  );
};

export default ExperienceCard;
