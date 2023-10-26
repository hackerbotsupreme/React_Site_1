import React from 'react'
import { useState } from 'react'
const Contact = () => {
  const [data,setData] = useState({
    fullName:'',
    phoneNumber:'',
    email:'',
    msg:''
  })
  const inputEvent = (event) =>{
    const{name,value}= event.target;
    setData((preVal)=>{
      return {
        ...preVal,
        [name] : value,
      }
    })
  }
  const FormSubmit = (e) =>{
     e.preventDefault();
     alert(`${data.fullName}.my mobile number is ${data.phoneNumber}`)
  }
  return (
    <>
      <div className=' my-5 '>
        <h1 className='Contact Us text-center '>Contact Us</h1>
      </div>
      <div className=' container  contact_div'>
        <div className='row'>
          <div className=' col-md-6  col-10  mx-auto '>
            <form className=' bg-body-secondary ' onSubmit={FormSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={inputEvent} placeholder="Enter Your Name " />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number </label>
                <input type="Phone Number " class="form-control" id="exampleFormControlInput1" name="phoneNumber" value={data.phoneNumber} onChange={inputEvent} placeholder="Mobile Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent} placeholder="Type your Message..."></textarea>
              </div>
              <div class="col-12">
                <button class="btn  btn-outline-success" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>)
}
export default Contact;