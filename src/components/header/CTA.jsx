import React from 'react'
import CV from '../../assets/Nkosinathi Ngele.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Dowload Cv</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA