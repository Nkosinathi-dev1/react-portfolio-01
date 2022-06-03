import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"

        // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

      >
      <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avt1" />
          </div>
          <h5 className='client__name'>Name Surname</h5>
            <small className="client__review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quae nostrum! Corrupti iure repudiandae fuga rem dolores eius temporibus quibusdam, quod quo ducimus culpa expedita!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avt1" />
          </div>
          <h5 className='client__name'>Name Surname</h5>
            <small className="client__review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quae nostrum! Corrupti iure repudiandae fuga rem dolores eius temporibus quibusdam, quod quo ducimus culpa expedita!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
      
          <div className="client__avatar">
            <img src={AVTR1} alt="avt1" />
          </div>
          <h5 className='client__name'>Name Surname</h5>
            <small className="client__review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quae nostrum! Corrupti iure repudiandae fuga rem dolores eius temporibus quibusdam, quod quo ducimus culpa expedita!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avt1" />
          </div>
          <h5 className='client__name'>Name Surname</h5>
            <small className="client__review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quae nostrum! Corrupti iure repudiandae fuga rem dolores eius temporibus quibusdam, quod quo ducimus culpa expedita!
            </small>
        </SwiperSlide>
        
      </Swiper>

    </section>
  )
}

export default testimonials