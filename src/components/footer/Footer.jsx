import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi' 
import {IoLogoTwitter} from 'react-icons/io'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>nathingele</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://za.linkedin.com/in/nkosinathi-ngele-074909128" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Nkosinathi-dev1" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com/nkosinathi001" target="_blank"><FiDribbble/></a>
        {/*  */}
        <a href="https://web.facebook.com/profile.php?id=100009982862585 " target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/nkosinathingele/?hl=en" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/nathingele" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; 2022 by nathingele</small>
      </div>

    </footer>
  )
}

export default Footer