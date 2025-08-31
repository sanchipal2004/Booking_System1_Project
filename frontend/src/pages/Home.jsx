import React from 'react'
import Navbar from '../assets/components/Navbar'
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Features from '../assets/components/Features'
import PropertyList from '../assets/components/PropertyList'
import Guestlove from '../assets/components/Guestlove'
import Email from '../assets/components/Email'
  


const Home = () => {
  return (
    <div>
      
    <Navbar/>
    <div className="div absolute w-full  ">
    <Header/></div>
<img className='w-full h-96 object-cover ' src="home.png" alt="" />
    <div className="homecontainer relative bg-slate-200 p-" >

    <h1 className='font-semifont text-3xl absolute p-4 left-36'>Destination of India</h1>
    <Features/>
    <h1 className='font-sans-serif  text-3xl font-semibold absolute  left-32 mx-2'>Property Type</h1>
 
    <PropertyList/>
    <h1 className='font-sans-serif font-semibold text-3xl absolute mx-5 left-32'> Guest Love Destinations</h1>
   
    <Guestlove/>
   <Email/>
<Footer/>
 
    </div>
   
    
  
    </div>
  )
}

export default Home
