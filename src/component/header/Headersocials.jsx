import React from 'react'
import{BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ashishsingh13/" target='blank'><BsLinkedin/></a>
        <a href="https://github.com/Ashishtorq" target='blank'><BsGithub/></a>
        <a href="https://www.instagram.com/ash_ish13_/"><FiInstagram /></a>
          <a href=""><IoLogoTwitter /></a>
    </div>
  )
}

export default Headersocials
