import React from 'react'
import Junkfood from './Junkfood'
import Beverages from './Beverages'
import Pastrys from './Pastrys'

const Menu = () => {
  return (
    <>
    <section className='Menu-section'>
      <div className='container-xxl m-auto py-3'>
         <div className='col-12'>
           <div className='d-flex junk-food'>
            <Junkfood />
           </div>
          <div className='Beverages'>
            <Beverages />
          </div>
          <div className='Pastrys '>
            <Pastrys />
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Menu