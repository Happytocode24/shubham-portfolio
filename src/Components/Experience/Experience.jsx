import './Experience.css';
import React, { useState, useRef } from 'react';
import { useWheel, useDrag } from '@use-gesture/react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Software Engineer at Cisco",
    work: {
      Organisation: "Cisco",
      Location: 'Banglore',
      projectName: "Cx Cloud",
      techStack: ['React.js', 'Angular', 'Python', 'Machine Learning', 'Flask', 'Java', 'SpringBoot'],
      Description: "Responsibilities include maintaining and developing features using Angular and Java microservices. Orchestrating the full SDLC lifecycle which involves designing, developing, testing, and deploying our own code using CI/CD pipelines."
    },
  },
  {
    title: "Intern at Cisco",
    work: {
      Organisation: "Cisco",
      Location: 'Banglore',
      projectName: "Licensing Support Bot",
      techStack: ['Python', 'Webhook', 'HTML', 'CSS' ,'React.js', 'Angular'],
      Description: "Designed and implemented a support bot to streamline Cisco licensing queries, scripting core functionalities in Python and integrating a webhook for real-time API interaction. Developed a dedicated website to host the bot, providing a seamless platform for obtaining licensing support."
    },
  },
];

const Experience = React.forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (deltaY) => {
    if (deltaY > 0 && index < experiences.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (deltaY < 0 && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const bind = useWheel(({ event }) => {
    handleScroll(event.deltaY);
  });

  const bindDrag = useDrag(({ movement: [_, my] }) => {
    handleScroll(-my);
  });

  return (
    <div className="experience-container" ref={ref}>
      <h1 className="experience-header-title">Experience</h1>
      <div className="experience-list" ref={containerRef} {...bind()} {...bindDrag()}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`experience-item ${
              i === index ? "active" : i < index ? "above" : "below"
            }`}
          >
            <h2 className="experience-title">{exp.title}</h2>
            <ExperienceCard key={i} work={exp.work} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Experience;
