import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FiMessageSquare} from 'react-icons/fi'
import {AiOutlineWhatsApp} from 'react-icons/ai'

import {BsLinkedin} from 'react-icons/bs'

import  { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_orih1vs', 'template_cmwr7lr', form.current, 'p8NDXt3WCuF7hpbBO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Talk To Me</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        {/* Start of Contact Types */}
        <div className="contact__option">
        <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nkosinathi@nathingele.com</h5>
            <a href="mailto:nkosinathi@nathingele.com" target='_blank'>Send email</a>
          </article>
  
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+27)73 695 4921</h5>
            <a href="https://api.whatsapp.com?phone=+2736954921" target='_blank'>Send WhatsApp Message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LikedIn</h4>
            <h5>Nkosinathi Ngele</h5>
            <a href="https://za.linkedin.com/in/nkosinathi-ngele-074909128" target='_blank'>Send Messange</a>
          </article>
        </div>
        {/* End of Contact Types */}
        {/* Start of Email Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message"  rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact