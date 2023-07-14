import React from 'react'
import './testimonial.css'
import avatar1 from "../../assests/avatar1.png";
import avatar2 from "../../assests/avatar2.jfif";
import avatar3 from "../../assests/avatar3.jpg";
import avatar4 from "../../assests/avatar4.jpg";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data= [
  {
    avatar:avatar1,
    name:<div>Saurabh Srivastava <small>(Dev, ABESEC)</small></div>,
    review:'I have mentored Ashish Singh and have been consistently impressed with his dedication to learn and adapt quickly. He has a strong foundation of HTML, CSS, React js, and JavaScript. He excel at building intuitive and visually appealing user interfaces. Ashish is a team player with excellent communication skills and I highly recommend him for any opportunity.'
  },
 
  {
    avatar:avatar2,
    name:<div>Yashwant Singh <small>(Frontend developer, Cognizant)</small></div>,
    review:'   Ashish Singh is a skilled and reliable React developer with strong HTML, CSS, and JavaScript skills. They excel at building intuitive and visually appealing user interfaces and are a valuable asset to any team. Ashish Singh is a team player with excellent communication skills and is always willing to lend a helping hand to their teammates. I highly recommend them for any future projects.'
  },
  
]

const Testimonial = () => {
  return (
      <section id="testimonial">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src= {avatar} alt="Img1" />
            </div>
            <h5 className='client__name'>{name}</h5>
            {/* <p style={{fontSize: '0.8rem',color:'var(--color-light)',marginBottom:'0.8rem'}}>{comp}</p> */}
            <small className="client__review">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
