import React from 'react'
import Cta from './Cta'
import './header.css'
import ME from '../../assests/sellf1.png'
import Headersocials from './Headersocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ashish</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta/>
          <Headersocials/>
        <div className="me">
          <img src={ME} alt="" />  
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header