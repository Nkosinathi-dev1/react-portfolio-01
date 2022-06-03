import React from 'react'
import './portfolio.css'    
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio1" />
        </div>

            <h3>C# WinForms E-Learning Desktop Application</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com/Nkosinathi-dev1/C-winForm-EL-APP-" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>  
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={IMG4} alt="Portfolio1" />
        </div>

            <h3>JavaScript Puzzle Game</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/nkosinathi001" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>  
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={IMG5} alt="Portfolio1" />
        </div>

            <h3>JavaScript Rock Paper Sciscor Game</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com/Nkosinathi-dev1/R-P-S" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/nkosinathi001" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>  
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={IMG3} alt="Portfolio1" />
        </div>

            <h3>ASP.Net Book List App</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/nkosinathi001" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>  
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio1" />
        </div>

            <h3>WPF Directory Search App</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/nkosinathi001" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>  
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={IMG6} alt="Portfolio1" />
        </div>

            <h3>HTML Simple Landing Page</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/nkosinathi001" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>  
      </article>
    </div>

    </section>
  )
}

export default Portfolio  