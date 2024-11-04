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
  const [revealedEducation, setRevealedEducation] = useState([education[0]]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [containerRef, setContainerRef] = useState(null);

  const handleScroll = useCallback((event) => {
    if (isScrolling) return;

    const { deltaY } = event;
    setIsScrolling(true);

    setTimeout(() => {
      if (deltaY > 0 && index < education.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
        setRevealedEducation((prev) => [
          ...prev,
          education[prev.length]
        ]);
      } else if (deltaY < 0 && index > 0) {
        setIndex((prevIndex) => prevIndex - 1);
        setRevealedEducation((prev) => prev.slice(0, -1));
      }
      setIsScrolling(false);
    }, 50); // Increased delay for smoother scrolling
  }, [isScrolling, index]);

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
      {revealedEducation.map((education, i) => (
  <div className="education-item" key={i}>
    <div className="education-card ">
      <div className='logo-title-container'>
      <img src={education.logo} alt={`${education.title} logo`} className="education-logo" />
      <h2 className="college-title">{education.title}</h2>
      </div>
      <p>{education.description}</p>
    </div>
    {i < revealedEducation.length - 1 && <div className="connecting-line" />}
    <div className="dot" />
  </div>
))}
      </div>
    </div>
  );
});

export default Education;
