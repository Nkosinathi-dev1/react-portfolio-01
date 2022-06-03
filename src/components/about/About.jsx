import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderReceivedLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about' >
      <h5>Learn More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
             <img src={ME} alt="" />
           </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years Working Experience</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ South Africa</small>
            </article> */}
            <article className="about__card">
              <RiFolderReceivedLine className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed </small>
            </article>
          </div>
          <p>Experienced Junior Software Developer with a demonstrated history of working in the information technology and services industry. Skilled in C#, SQL, JavaScript, HTML, CSS and Figma.</p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About