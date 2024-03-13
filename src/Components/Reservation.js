import React from 'react'
import { Link } from 'react-router-dom'

const Reservation = () => {
  return (
    <>
    <section className='Reservation-section d-flex container-xxl py-5 wow fadeInUp'>
     <div className='row'>
      <div className='col-md-6'>
        <div className='resrvation-main'>
           <img className=""
                src='images/reserve.jpg' 
                alt='reserve-img'/>
        </div>
      </div>
     </div>
     <div className='col-md-6 bg-secondary align-items-center '>
        <div className='p-5'>
            <h5 className='section-title ff-secondary text-warning text-start text-primary fw-normal '>Reservation</h5>
            <h1 className='text-white mb-4'>
                Booking a Table Online
            </h1>
            <div className="col-mb-6 textInputWrapper">
                 <input placeholder="Your Name" 
                        type="text" 
                        className="textInput"/>
             </div>
             <div className="col-mb-6 textInputWrapper">
                 <input placeholder="E-Mail" 
                        type="text" 
                        className="textInput"/>
             </div>
             <div className="col-mb-6 textInputWrapper" id='date3'>
                 <input placeholder="Date & Time " 
                        type="date&time" 
                        className="textInput"
                        data-target="#date3"
                        itemID='datetime'
                        data-toggle="datimpicker"/>
             </div>
             <div className="col-mb-6 textInputWrapper">
                 <input placeholder="Select Persons" 
                        type="text" 
                        className="textInput"
                        />
             </div>
            <div className='col-12'>
            <div className="textInputWrapper SpecialRequests">
                 <textarea 
                        placeholder="Special Requests" 
                        type="text" 
                        className="text-secondary form-control textInput"
                    />
             </div>
             <div className='col-12 '>
           <Link to="/"
             className="text-decoration-none animated-button">
               <svg viewBox="0 0 24 24" 
                    className="arr-2" 
                    xmlns="http://www.w3.org/2000/svg">
                 <path
                   d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                 ></path>
              </svg>
                  <span
                  className="text">Book Now</span>
                  <span className="circle"></span>
                  <svg viewBox="0 0 24 24" 
                       className="arr-1" 
                       xmlns="http://www.w3.org/2000/svg">
                <path
                   d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                 ></path>
              </svg>
            </Link>

             </div>
            </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default Reservation