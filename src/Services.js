import React from 'react'
import asfnlkf from '../src/Images/img3.jpg'
import Cards from './Card'
import Sdata from './Sdata'
const Services = () => {
  return (
    <>
      <div className='my-5'>
        <h3 className=' text-center '>Our Services</h3>
      </div>
      <div className=' container-fluid  '>
        <div className='row'>
          <div className='col-10 mx-auto '>
            <div className='row gy-4 '>
            {/* <Cards/> */}
              {
                Sdata.map((val, ind) => {
                  return <Cards key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                })
              }
              {/* <div className=' col-md-4  col-10  mx-auto '>
                <div class="card">
                  <img src={asfnlkf} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div> */}
              {/* <div className=' col-md-4  col-10  mx-auto '>
                <div class="card">
                  <img src={asfnlkf} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className=' col-md-4  col-10  mx-auto '>
                <div class="card">
                  <img src={asfnlkf} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className=' col-md-4  col-10  mx-auto '>
                <div class="card">
                  <img src={asfnlkf} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className=' col-md-4  col-10  mx-auto '>
                <div class="card">
                  <img src={asfnlkf} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className=' col-md-4  col-10  mx-auto '>
                <div class="card">
                  <img src={asfnlkf} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>)
}
export default Services;