import React from 'react'
import {NavLink} from 'react-router-dom'
import asfnlkf from '../src/Images/img3.jpg'
const Cards = (props) => {
    return (
        <>
            {/* <div className='my-5'>
        <h3 className=' text-center '>Our Services</h3>
      </div>
      <div className=' container-fluid  '>
        <div className='row'>
          <div className='col-10 mx-auto '>
            <div className='row gy-4 '> */}
            <div className=' col-md-4  col-10  mx-auto '>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title   font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        {/* </div >
          </div >
        </div >
      </div > */}
    </>)
}
export default Cards;