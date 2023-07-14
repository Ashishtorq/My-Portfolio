import React from 'react'
import './footer.css'
import {BsLinkedin, BsStackOverflow} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiYoutube} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo' style={{color:'white'}}>Ashish Singh</a>
        <ul className="permalinks">

          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/ashishsingh13/"><BsLinkedin /></a>
          <a href="https://www.instagram.com/ash_ish13_/"><FiInstagram /></a>
          <a href=""><IoLogoTwitter /></a>
          <a href=""><BsStackOverflow/></a>
          {/* <a href="https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg"><SiYoutube /></a> */}
        </div>

    <div className="footer__copyright">
      <small>&copy; Ashish Singh All rights reserved.</small>
    </div>

    </footer>
  )   
}

export default Footer