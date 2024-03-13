import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='hero-section  py-3'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <div id="carouselExampleCaptions" 
              className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" 
              data-bs-target="#carouselExampleCaptions" 
              data-bs-slide-to="0"
              className="active" 
              aria-current="true" 
              aria-label="Slide 1"></button>
      <button type="button" 
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" 
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2" 
              aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/outlook.jpg"
             className="d-block w-100 h-100 img-fluid" 
             alt="outlook"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Foodzone is Not a Restuarant IT'S AN EMOTION</h5>
          <p>A Healthy OutSide Starts from the Inside</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="images/pizza.jpg" 
             className="d-block img-fluid" 
             alt="pizza"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Food is Fuel</h5>
          <p>Not Theraphy</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="images/varieties.jpg"
             className="d-block  img-fluid" 
             alt="varieties"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>A new ERA of dinning begins Today</h5>
      
        </div>
      </div>
    </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>


    
  )
}

export default Hero