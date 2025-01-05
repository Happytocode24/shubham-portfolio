import './About.css';
import React from 'react';

const About = React.forwardRef(( {isDarkMode}, ref) => {
  
  return (
    <div className="about-container" ref={ref}>
      <h1 className={isDarkMode?"about-title":"about-title-light"}>About Me !</h1>
      <div className={isDarkMode?"about-content":"about-content-light"}>
        <div className={isDarkMode?"text-style":"text-style-light"}>
          <p>I am a dedicated and diligent Software Engineer with a strong expertise in full stack development.</p>
          <p>Currently, I work at Cisco, where I design, develop, and maintain full-stack applications that power our company's products.</p>
          <p>My technical skills include JavaScript, Python, React.js, Angular, SQL, Docker, AWS, Handling REST API's, Machine Learning, and Artificial Intelligence.</p>
          <p>I have a solid understanding of Data Structures and Algorithms, complemented by hands-on experience in system design.</p>
          <p>I am passionate about writing clean, efficient, and maintainable code, and I thrive in environments that challenge me to learn and adapt to new technologies.</p>
          <p>Looking forward to discussing how my skills and experience can contribute to your organization!</p>
        </div>
      </div>
    </div>
  );
});

export default About;
