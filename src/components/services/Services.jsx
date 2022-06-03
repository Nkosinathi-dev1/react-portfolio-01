import React from 'react'
import './services.css'
import {MdOutlinePlayArrow} from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>Technologies</h5>
      <h2>Services</h2>
      <div className="container services__container">
         {/* Start of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          {/* <li>
              <MdOutlinePlayArrow className='service__list-icon'/>
              <p>Figma Design</p>
            </li> */}
            <li>
              <MdOutlinePlayArrow className='service__list-icon'/>
              <p>Web Design</p>
            </li>
            <li>
              <MdOutlinePlayArrow className='service__list-icon'/>
              <p>Desktop Design</p>
            </li>
            <li>
              <MdOutlinePlayArrow className='service__list-icon'/>
              <p>Mobile Design</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        {/* Start of WEB Development */}
        <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
        <li>
            <MdOutlinePlayArrow className='service__list-icon'/>
            <p>Websites.</p>
          </li>
          <li>
            <MdOutlinePlayArrow className='service__list-icon'/>
            <p>Web Applications.</p>
          </li>
          <li>
            <MdOutlinePlayArrow className='service__list-icon'/>
            <p>E-Commerce.</p>
          </li>
          <li>
            <MdOutlinePlayArrow className='service__list-icon'/>
            <p>Web Scrabbing.</p>
          </li>
        </ul>
      </article>
      {/* End of WEB Development */}

      {/* Start of Desktop Development*/}
      <article className="service">
        <div className="service__head">
          <h3>Desktop Development</h3>
        </div>
        <ul className="service__list">
        <li>
            <MdOutlinePlayArrow className='service__list-icon'/>
            <p>Desktop Applications.</p>
          </li>
          <li>
            <MdOutlinePlayArrow className='service__list-icon'/>
            <p>Desktop Forms.</p>
          </li>
        </ul>
      </article>
      {/* End of Database Management */}


      </div>
    </section>
  )
}

export default Services