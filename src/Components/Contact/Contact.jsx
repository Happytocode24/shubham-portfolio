import './Contact.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import githubLogo from '../logos/social.png';
import linkedInLogo from '../logos/LinkedIn2.png';
import mailLogo from '../logos/mail.png';
import callLogo from '../logos/phone-call.png';
import sendLogo from '../logos/icons8-send-64.png';
import githubLight from '../logos/contact-github-light.png';
import LinkedInLight from '../logos/contact-linkedin-light.svg'
import callLight from '../logos/contact-light-50.png'
import emailLight from '../logos/contact-email-light-50.png'

const Contact = React.forwardRef(({isDarkMode}, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    const emailData = {
      to_name: 'Shubham Mishra',  
      from_name: name,            
      email: email,              
      message: message     
    };

    // Use EmailJS to send the message
    emailjs.send('service_hdre31f', 'template_vj1vw3o', emailData, 'ktQ5Gv9WziW6bVxIS')
      .then((response) => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-container" ref={ref}>
      <h1 className={isDarkMode?"contact-title":"contact-title-light"}>Contact</h1>
      <div className="contact-wrapper">
        <div className={isDarkMode?"contact-card":"contact-card-light"}>
          <p className={isDarkMode?"additional-text":"additional-text-light"}>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="input-field" 
              value={formData.name} 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="input-field" 
              value={formData.email} 
              onChange={handleChange} 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              className="input-field message-field" 
              value={formData.message} 
              onChange={handleChange} 
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" 
            className={isDarkMode?"send-button":"send-button-light"}>
              Send Message
              <img src={sendLogo} alt="Message" className="icon-small" />
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <img src={isDarkMode?callLogo:callLight} alt="Phone" className="contact-logo" />
            <span className={isDarkMode?"contact-text":"contact-text-light"}>+918224999659</span>
          </div>
          <div className="contact-item">
            <img src={isDarkMode?mailLogo:emailLight} alt="Email" className="contact-logo" />
            <span className={isDarkMode?"contact-text":"contact-text-light"}>shubhambitspilani@yahoo.com</span>
          </div>
          <div className={isDarkMode?"social-links":"social-links-light"}>
            <div className="contact-item">
              <a href="https://github.com/Happytocode24" target="_blank" rel="noopener noreferrer">
                <img src={isDarkMode?githubLogo:githubLight} alt="GitHub" className="social-media-logo" />
              </a>
            </div>
            <div className="contact-item">
              <a href="https://www.linkedin.com/in/shubham-mishra-669726154/" target="_blank" rel="noopener noreferrer">
                <img src={isDarkMode?linkedInLogo:LinkedInLight} alt="LinkedIn" className="social-media-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
});

export default Contact;
