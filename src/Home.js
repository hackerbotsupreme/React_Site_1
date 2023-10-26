import React from 'react'
import web from '../src/Images/img.png'
import {NavLink} from 'react-router-dom'
import Common from './Common'


const Home = () => {
  return (
    <>
      {/* <section id='header' className=' d-flex  align-items-center '>
        <div className=' container-fluid nav_bg '>
          <div className='row'>
            <div className='col-10 mx-auto '>
              <div className='row'>
                <div className=' col-md-6 pt-5 pt-lg-5  order-2 order-lg-1  d-flex  justify-content-center  flex-column  '>
                  <h1>Grow your business with<span className='brand-name'> Aloke Pramanik  </span> </h1>
                  <h2 className='my-3'>
                    We are the team of the talented developers  making websites
                  </h2>
                  <div className=' mt-3 '>
                    <NavLink to='/services' className='btn-get-started'>Get Started</NavLink>
                  </div>
                </div>
                <div className=' col-lg-6  order-1  order-lg-2 '>
                  <img src={web} className=' img-fluid  animated ' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Common name="Grow your Business with" imgsrc={web} visit='/Services' btname='Get Started'/>
    </>)
}
export default Home;