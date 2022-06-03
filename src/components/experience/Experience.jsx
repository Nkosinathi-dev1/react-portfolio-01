import React from 'react'
import './experience.css'
import {CgCheckO} from 'react-icons/cg'

const experience = () => {
  return (
    <section id='experience'>
      <h5>My Experience</h5>
      <h2>Skills</h2>
      <div className="container experience_container">
        <div className="experienece__frontend">
          {/* Front End */}
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>Javasript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>

        {/* Back End */}
        <div className="exeperience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <CgCheckO className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience