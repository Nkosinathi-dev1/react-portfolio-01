import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="text__me">
          <h5>Hello I'm</h5>
          <h1>Nkosinathi Ngele</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
        </div>
        <HeaderSocials/>

        <div className="me">
          <img id="myImg" src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header