import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "../../styles/contact.css";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bq3gwud', 'template_7hu41j6', form.current, 'ZZkfO_YABY98KUFrM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main>
     <h2>Contact Me</h2>
     <form className = "form-box" ref={form} onSubmit={sendEmail}>    
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="button" type="submit" value="Send" />
      </form>
    </main>
  );
}
