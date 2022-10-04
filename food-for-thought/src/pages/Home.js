import React from 'react';
import AboutUs from '../components/AboutUs';


function Home() {
  return (
        <>
        
        <div className='Home text-center'>
         <p className='text-center  fw-bold title'>
          Thinking about<br/> what to cook <br/> and how to cook it?
         </p> 
         <p className='text-center fs-3'>
            Worry no more we got you
         </p> 
         <button type="button" className="btn btn-success mt-3">Success</button> 
        </div>
         <AboutUs/>
        </>
  )
}

export default Home