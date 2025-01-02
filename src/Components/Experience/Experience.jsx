import './Experience.css';
import React, { useState, useRef, useCallback } from 'react';
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
  const timeoutRef = useRef(null);

  const handleScroll = useCallback((deltaY) => {
    if (timeoutRef.current) return;

    if (deltaY > 0 && index < experiences.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (deltaY < 0 && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, 500);  // Adjust the timeout duration as needed
  }, [index]);

  const handleDrag = useCallback(({ movement: [_, my], memo = index }) => {
    if (timeoutRef.current) return;
    const newIndex = memo - Math.sign(my);
    if (newIndex >= 0 && newIndex < experiences.length) {
      setIndex(newIndex);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, 500);  // Adjust the timeout duration as needed
    return memo;
  }, [index]);

  const bindWheel = useWheel(({ event }) => {
    handleScroll(event.deltaY);
  });

  const bindDrag = useDrag(handleDrag, {
    bounds: { top: 0, bottom: experiences.length - 1 },
    rubberband: true,
    axis: 'y'
  });

  return (
    <div className="experience-container" ref={ref}>
      <h1 className="experience-header-title">Experience</h1>
      <div className="experience-list" ref={containerRef} {...bindWheel()} {...bindDrag()}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`experience-item ${
              i === index ? "active" : i < index ? "above" : "below"
            }`}
          >
            <h2 className="experience-title">{exp.title}</h2>
            <ExperienceCard work={exp.work} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Experience;
