import React from 'react';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';


function Home() {
  return (
        <>
        <NavBar/>
        <div className='Home text-center'>
         <p className='text-center  fw-bold title'>
          Thinking about<br/> what to cook <br/> and how to cook it?
         </p> 
         <p className='text-center fs-3'>
            Worry no more we got you
         </p> 
         <button type="button" className="btn btn-success mt-3">Get Started</button> 
        </div>
         <AboutUs/>
         <Footer/>
        </>
  )
}

export default Home