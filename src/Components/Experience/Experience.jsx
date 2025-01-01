import './Experience.css';
import React, { useState, useRef, useEffect, useCallback } from 'react';

const experiences = [
  {
    title: "Software Engineer at Cisco",
    description:
      "I developed and maintained over 20 web pages using Angular and ReactJS, focusing on performance analysis through metrics like LCP and FCP, and reducing data load times by 30% through effective optimization techniques. I refactored legacy code by transitioning from NGRX to Component Store, cutting down on 30 files and achieving a 24% reduction in code lines. My contributions also included extensive testing with Cypress and unit tests, ensuring over 96% coverage for feature reliability. Additionally, I engaged in server-side development with Node.js, creating APIs and backend logic. My expertise in HTML and CSS enabled the creation of responsive and visually appealing web pages.",
  },
  {
    title: "Intern at Cisco",
    description:
      "I designed and implemented a support bot to streamline Cisco licensing queries, scripting core functionalities in Python and integrating a webhook for real-time API interaction. Additionally, I developed a dedicated website to host the bot, providing a seamless platform for obtaining licensing support.",
  },
];

const Experience = React.forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);

  const handleScroll = useCallback((deltaY) => {
    if (deltaY > 0 && index < experiences.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (deltaY < 0 && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  }, [index]);

  const handleWheel = useCallback((event) => {
    handleScroll(event.deltaY);
  }, [handleScroll]);

  const handleTouchStart = useCallback((event) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((event) => {
    const touchEndY = event.touches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;
    handleScroll(deltaY);
    touchStartY.current = touchEndY;
  }, [handleScroll]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  return (
    <div className="experience-container" ref={ref}>
      <h1 className="experience-header-title">Experience</h1>
      <div className="experience-list" ref={containerRef}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`experience-item ${
              i === index ? "active" : i < index ? "above" : "below"
            }`}
          >
            <h2 className="experience-title">{exp.title}</h2>
            <div className="experience-card">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Experience;
