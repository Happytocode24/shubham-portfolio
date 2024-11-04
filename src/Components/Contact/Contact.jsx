import './Contact.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import githubLogo from '../logos/social.png';
import linkedInLogo from '../logos/LinkedIn2.png';
import mailLogo from '../logos/mail.png';
import callLogo from '../logos/phone-call.png';

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error message on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Check for empty fields
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    // Construct the data to match the EmailJS template placeholders
    const emailData = {
      to_name: 'Shubham Mishra',        // Set your name or any other recipient detail
      from_name: name,             // From the form's name field
      email: email,                // Sender's email from the form
      message: message             // Message content from the form
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
      <h1 className="contact-title ">Contact</h1>
      <div className="contact-wrapper">
        <div className="contact-card">
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
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-item">
          <img src= {callLogo} alt="GitHub" className="contact-logo" />
            <span className="contact-text">+918224999659</span>
          </div>
          <div className="contact-item">
          <img src= {mailLogo} alt="GitHub" className="contact-logo" />
            <span className="contact-text">shubhambitspilani@yahoo.com</span>
          </div>
          <div className="social-links">
    <div className="contact-item">
      <a href="https://github.com/Happytocode24" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" className="social-media-logo" />
      </a>
    </div>
    <div className="contact-item">
      <a href="https://www.linkedin.com/in/shubham-mishra-669726154/" target="_blank" rel="noopener noreferrer">
        <img src={linkedInLogo} alt="LinkedIn" className="social-media-logo" />
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
