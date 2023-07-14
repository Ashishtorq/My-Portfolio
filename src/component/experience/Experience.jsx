import React from 'react'
import './experience.css';
import { BsFillPatchCheckFill  } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technical Knowledge</h2>

      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
           <div>
           <h4>Material-UI</h4>
            <small className='text-light'>Beginner</small>
           </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>ReactJs</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Next Js</h4>
            <small className='text-light'>Beginner</small>
          </div>          
          </article>
          </div>
        </div>
        
        <div className="experience__backend">
        <h3>Software Development</h3>
        <div className="experience__content">
        <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Python</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>
          
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
           <div>
           <h4>C/C++</h4>
            <small className='text-light'>Intermediate</small>
           </div>
           </article>
         
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Git/GitHub</h4>
            <small className='text-light'>Intermediate</small>
          </div>          
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Core Subjects</h4>
            <small className='text-light'>Intermediate</small>
          
            </div>
          </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience