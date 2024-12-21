import './Education.css';
import React, { useState, useEffect, useCallback } from 'react';
import bitslogo from '../logos/BITS-logo.png';
import rgpvLogo from '../logos/rgpv.svg'
const education = [
  {  logo:bitslogo,
    title: "Birla Institute of Technology and Science Pilani",
    description: "MTech in Computer Science"
  },
  
  { logo:rgpvLogo,
    title: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
     description:"BTech Computer Science Engineering"},
];

const Education = React.forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const [containerRef, setContainerRef] = useState(null);
  const educationLength = education.length;

  const handleScroll = useCallback((event) => {
    const { deltaY } = event;

    if (deltaY > 0 && index < educationLength - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (deltaY < 0 && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  }, [index, educationLength]);

  useEffect(() => {
    if (containerRef) {
      containerRef.addEventListener("wheel", handleScroll);
    }
    return () => {
      if (containerRef) {
        containerRef.removeEventListener("wheel", handleScroll);
      }
    };
  }, [handleScroll, containerRef]);

  return (
    <div className="education-container" ref={ref}>
      <h1 className="education-title">Education</h1>
      <div className="education-list" ref={setContainerRef}>
        {education.map((item, i) => {
          let className = "education-item";
          if (i === index) {
            className += " active";
          } else if (i < index) {
            className += " above";
          } else {
            className += " below";
          }

          return (
            <div className={className} key={i}>
              <div className="education-card">
                <div className="logo-title-container">
                  <img
                    src={item.logo}
                    alt={`${item.title} logo`}
                    className="education-logo"
                  />
                  <h2 className="college-title">{item.title}</h2>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
export default Education;