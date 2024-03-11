import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {SiBuymeacoffee} from 'react-icons/si'

const Contact = () => {

  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_5n0id7q', 'service_5n0id7q', form.current, 'hDeRlK-5jXDd9ZbDm')
  //   e.target.reset();
  // };

  // export const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tpwucw2', 'template_297nl5s', form.current, 'UwH0nAGt3kDl5pg2V')
       e.target.reset()
    };

    
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 style={{ fontSize: "0.8rem" }}>ashishtorq20@gmail.com</h5>
            <a href="mailto:saurabhofficial203@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <SiBuymeacoffee className="contact__option-icon" />
            <h4>Buy me a Coffee</h4>
            <h5 style={{ fontSize: "0.8rem" }}>Support</h5>
            <a href="https://bmc.link/ashishtorqz">Let's Go</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div id="scrollup">
          <a href=".container header__container">Scroll Up</a>
        </div>
      </div>
    </section>
  );
}

export default Contact
