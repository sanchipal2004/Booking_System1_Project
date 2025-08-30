import React from 'react'

import Navbar from '../assets/components/Navbar'
const Aboutus = () => {
  return (
    <div>
      <Navbar/>
      <div className="">
        <div className="card flex flex-col ">
             <img className='relative opacity-75 h-96 object-cover'src="loginbg1.png  " alt="" />
            <div className="p-24 absolute top 52 left-96 mx-80 py-40  ">
               
            <h1 className='text-5xl text-center font-bold '>Welcome to StayEase</h1>
            <p  className='text-2xl  text-center font-bold '> Your Trusted Hotel Booking Partner
            </p>
            </div>
            <div className="card1  flex p-9 justify-around ">
<div className="flex flex-col"><h1 className='text-3xl font-bold py-10'>🌐About Us</h1>
    <span className='text-base w-96  '>At StayEase, we believe that every journey begins with a comfortable stay. Our mission is to make booking hotels easy,affordable, and reliable for travelers across the globe. Whether you're planning a luxury getaway, a business trip, or a weekend escape, we help you find the perfect place to stay—quickly and effortlessly.</span>
</div><img className=' w-96 h-80 bg-rose-400' src="about.png" alt="" />
            </div>
         
<div className="card1  flex items-center justify-around ">
    
    <img className=' w-96 rounded-s-full rounded-e-3xl-md' src="whychoose.png" alt="" />
      <div className="flex flex-col">
    <h1 className='text-3xl font-bold py-5 text-bg  '>🏆Why Choose Us</h1>
    <p className='text-base w-96 text-black'>Wide Range of Properties
From boutique hotels to luxury resorts, we offer an extensive selection of accommodations in top destinations worldwide.
 Best Price Guarantee.Our platform ensures a seamless booking experience with fast confirmations,24/7 Customer Support.

</p>
            </div></div>

            <div className="card1  flex items-center justify-around py-8">
     <div className="flex flex-col"><h1 className='text-3xl font-bold py-5 mx-5 '>🌍Our Value</h1>
    <p className='text-base w-96'>Integrity: We operate with honesty and transparency.
Customer First: Your satisfaction is at the heart of everything we do.
Innovation: We constantly improve to serve you better.
Sustainability: We support eco-friendly properties and responsible tourism.</p>
    </div><img className=' w-96 ' src="value.png" alt="" />
            </div>
            <div className="card1  flex items-center justify-around ">
     <img className=' w-96 ' src="touch.png" alt="" />
            <div className="flex flex-col"><h1 className='text-3xl font-bold py-5 mx-12'>📞 Get in Touch</h1>
    <p className='text-base w-96  '> 📧 Email: stayease@gmail.com</p>
      <p className='text-base w-96 '> 📱 Phone: +1-234-567-890</p>
    </div></div>
        </div>
        
      </div>
    </div>
  )
}

export default Aboutus
