import React from 'react'
import './nav.css'
import{AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import{BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

const  [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'activeNav':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about'?'activeNav':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience'?'activeNav':''}><BiBook/> </a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav==='#services'?'activeNav':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'?'activeNav':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav