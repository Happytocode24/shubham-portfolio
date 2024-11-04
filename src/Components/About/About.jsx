import './About.css';
import React from 'react';

const About = React.forwardRef((props, ref) => {
  
  return (
    <div className="about-container" ref={ref}>
      <h1 className="about-title">About Me !</h1>
      <div className="about-content">
        <div className="text-style">
          <p>I am a dedicated and diligent Software Engineer with a strong expertise in web development.</p>
          <p>Currently, I work at Cisco, where I design, develop, and maintain full-stack applications that power our company's products.</p>
          <p>My technical skills include JavaScript, Python, React.js, Angular, SQL, Machine Learning, and Artificial Intelligence.</p>
          <p>I have a solid understanding of Data Structures and Algorithms, complemented by hands-on experience in system design.</p>
          <p>I am passionate about writing clean, efficient, and maintainable code, and I thrive in environments that challenge me to learn and adapt to new technologies.</p>
          <p>Looking forward to discussing how my skills and experience can contribute to your organization!</p>
        </div>
      </div>
    </div>
  );
});

export default About;
