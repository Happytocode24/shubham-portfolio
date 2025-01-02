import './Education.css';
import React, { useState, useRef, useCallback } from 'react';
import { useWheel, useDrag } from '@use-gesture/react';
import bitslogo from '../logos/BITS-logo.png';
import rgpvLogo from '../logos/rgpv.svg';
import maharashi from '../logos/maharashi-vidhya-mandir.png';

const education = [
  { logo: bitslogo, title: "Birla Institute of Technology and Science Pilani", description: "MTech in Computer Science" },
  { logo: rgpvLogo, title: "Rajiv Gandhi Proudyogiki Vishwavidyalaya", description: "BTech Computer Science Engineering" },
  { logo: maharashi, title: "Maharashi Vidhya Mandir Rewa M.P ", description: "12th Standard" },
];

const Education = React.forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const educationLength = education.length;
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleScroll = useCallback(({ delta: [, deltaY] }) => {
    if (timeoutRef.current) return;
    if (deltaY > 0 && index < educationLength - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (deltaY < 0 && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, 500);
  }, [index, educationLength]);

  const handleDrag = useCallback(({ movement: [, my], memo = index }) => {
    if (timeoutRef.current) return;
    const newIndex = memo - Math.sign(my);
    if (newIndex >= 0 && newIndex < educationLength) {
      setIndex(newIndex);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, 300);
    return memo;
  }, [index, educationLength]);

  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    containerRef.current.touchStartY = touch.clientY;
  }, []);

  const handleTouchMove = useCallback((e) => {
    const touch = e.touches[0];
    const touchEndY = touch.clientY;
    const deltaY = containerRef.current.touchStartY - touchEndY;

    if (Math.abs(deltaY) > 10) {
      handleScroll({ delta: [0, deltaY] });
    }
  }, [handleScroll]);

  useWheel(handleScroll, { target: containerRef });
  useDrag(handleDrag, { target: containerRef });

  return (
    <div className="education-container" ref={ref}>
      <h1 className="education-title">Education</h1>
      <div
        className="education-list"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
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
                  <img src={item.logo} alt={`${item.title} logo`} className="education-logo" />
                  <h2 className="college-title">{item.title}</h2>
                </div>
                <p className="degree-description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Education;
