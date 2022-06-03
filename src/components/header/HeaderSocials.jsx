import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi' 
import {IoLogoTwitter} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://za.linkedin.com/in/nkosinathi-ngele-074909128" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Nkosinathi-dev1" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com/nkosinathi001" target="_blank"><FiDribbble/></a>
        {/*  */}
        <a href="https://web.facebook.com/profile.php?id=100009982862585 " target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/nkosinathingele/?hl=en" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/nathingele" target="_blank"><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials