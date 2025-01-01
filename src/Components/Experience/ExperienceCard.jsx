import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ work }) => {
  return (
    <div className="experience-card">
      <pre className="experience-details">
        <span className="const-color">const</span> work <span className="equal-color">=</span> {'{\n'}
        &nbsp;&nbsp;<span className="braces-color">Organisation:</span> <span className="value-color">'{work.Organisation}'</span>,{'\n'}
        &nbsp;&nbsp;<span className="braces-color">Location:</span> <span className="value-color">'{work.Location}'</span>,{'\n'}
        &nbsp;&nbsp;<span className="braces-color">projectName:</span> <span className="value-color">'{work.projectName}'</span>,{'\n'}
        &nbsp;&nbsp;<span className="braces-color">techStack:</span> [<span className="value-color">
          {work.techStack.map((tech, index) => (
            <span key={index}>
              '{tech}'{index < work.techStack.length - 1 ? ', ' : ''}
            </span>
          ))}
        </span>],{'\n'}
        &nbsp;&nbsp;<span className="braces-color">Description:</span> <span className="value-color">'{work.Description}'</span>{'\n'}
        {'};'}
      </pre>
    </div>
  );
};

export default ExperienceCard;
