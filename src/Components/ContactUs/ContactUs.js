import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'; // Link the CSS file

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We will do our best to respond in a timely manner. Thanks for your patience.</p>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="from_name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="from_email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;