import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>


      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
          </ul>
        </article>

          {/* End of the UX UI */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
          </ul>
        </article>

          {/* End of the Web Development */}

        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </li>
          </ul>
        </article>



      </div>


    </section>
  )
}

export default Services