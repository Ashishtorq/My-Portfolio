import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/testimonial/Testimonial'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Education from './component/education/Education'

const App = () => {
  return (
      <>
      <Header/>
       <Nav/>
      <About/>
      <Education/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      <Testimonial/>
      <Contact/> 
      <Footer/>
      </>
    )
}

export default App