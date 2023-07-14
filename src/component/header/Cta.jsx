import React from 'react'
import CV from '../../assests/Resume (2).pdf'

const Cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talks</a>
    </div>
  )
}

export default Cta
