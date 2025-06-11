import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>For any queries, feel free to drop a mail at:</p>
      <a href="mailto:harmandhiman6776@gmail.com" className="email-link">
        harmandhiman6776@gmail.com
      </a>
      <p>I love to hear from you regarding collaborations, project ideas, or feedback!</p>
    </div>
  );
};

export default Contact;
