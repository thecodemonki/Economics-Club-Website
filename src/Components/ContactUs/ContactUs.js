import React from 'react';
import './ContactUs.css'; // Link the CSS file

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We will do our best to respond in a timely manner. Thanks for your patience.</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;