import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
         <div className="container-fluid">
            <a className="navbar-brand" 
               href="/"><img src='images/foodzone.png'/></a>
            <button className="navbar-toggler" 
                     type="button" 
                     data-bs-toggle="collapse" 
                     data-bs-target="#navbarSupportedContent" 
                     aria-controls="navbarSupportedContent" 
                     aria-expanded="false" 
                     aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" 
         id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-5 mb-lg-0">
         <li className="nav-item">
          <Link className='nav-link text-dark' 
                to="/" >Home</Link>
        </li>
         <li className="nav-item">
         <Link className='nav-link text-dark' 
                to="/menu" >Menu</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-dark dropdown-toggle" 
             href="#" 
             role="button"
             data-bs-toggle="dropdown" 
             aria-expanded="false">
            Our Special
          </a>
          <ul className="dropdown-menu bg-secondary">
            <li><Link className='dropdown-item text-dark nav-link ' 
                      to="/junkfoods" >Junk Foods</Link></li>
            <li><Link className='dropdown-item text-dark nav-link ' 
                      to="/Beverages" >Beverages</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className='dropdown-item text-dark nav-link  ' 
                      to="/pastrys" >Pastry's</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" 
             role="search">
        <input className="form-control me-2" 
               type="search" 
               placeholder="Recipies" 
               aria-label="Search"/>

            <Link className=' btn btn-outline-secondary text-decoration-none text-dark' 
                      to="/reservation" >Tap & Njoy with Us</Link>
       
             
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header