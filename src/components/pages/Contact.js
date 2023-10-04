import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

import "../../styles/contact.css";

export default function Contact() {

  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
    console.log(form.current)
    console.log(e.target.elements.user_name.value)
    console.log(e.target.elements.user_email.value)
    console.log(e.target.elements.message.value)

    if (!e.target.elements.user_name.value) {
      setErrorMessage("Please Enter Your Name")
      e.target.elements.user_name.focus()
      return;
    }
    if (!e.target.elements.user_email.value ) {
      setErrorMessage("Please Enter Email")
      e.target.elements.user_email.focus()
      return;
    }
    if (!e.target.elements.message.value) {
      setErrorMessage("Please Enter A Message")
      e.target.elements.message.focus()
      return;
    }

    emailjs.sendForm('service_bq3gwud', 'template_7hu41j6', form.current, 'ZZkfO_YABY98KUFrM')
      .then((result) => {
          setErrorMessage("Recived your message. I will get back to you soon!")
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      }); 
  };

  const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    console.log(event.target.name)
    if (!event.target.value && event.target.name === 'user_name') {
      setErrorMessage("Please Enter Your Name")
      event.target.focus()
      return;
    } else if (!event.target.value && event.target.name === 'user_email') {
      setErrorMessage("Please Enter Email")
      event.target.focus()
      return;
    } else if (!event.target.value && event.target.name === 'message') {
      setErrorMessage("Please Enter A Message")
      event.target.focus()
      return;
    } else {
      setErrorMessage("")
    }
  }

  return (
    <main>
     <h2>Contact Me</h2>
     <form className = "form-box" ref={form} onSubmit={sendEmail}>  
        {errorMessage && <div> {errorMessage} </div>}
        <label>Name</label>
        <input type="text" name="user_name" onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="user_email"  onChange={handleChange}/>
        <label>Message</label>
        <textarea name="message"  onChange={handleChange} />
        <input className="button" type="submit" value="Send" />
      </form>
    </main>
  );
}
