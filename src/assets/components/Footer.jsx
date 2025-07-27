import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-cyan-950 text-white  p-5 flex flex-col w-full  gap-1 '>
        <div className="container flex mx-auto justify-between items-center ">
            <span className=' text-rose-500 font-bold text-3xl  '>StayEase</span>
            
        </div>
        
      <div className="list flex  mx-80 justify-around ">
        <ul className="footerl m-1 flex flex-col  text-lg">
       < Link to ="/aboutus" className='footerItem m-1 p-1 hover:underline'>About us</Link>
      < Link to ="/" className='footerItem m-1 p-1 hover:underline'>Home</Link>
            < Link to ="/login" className='footerItem m-1 p-1 hover:underline'>sign in</Link>
                < Link to ="/register" className='footerItem m-1 p-1 hover:underline'>sign up</Link></ul>

        <ul className="footerl m-1 p-1 text-lg">
          <li className="footerItem m-1 p-1">Legal</li>
          <li className="footerItem m-1 p-1">Termsofusage</li>
          <li className="footerItem m-1 p-1">Privacy Policy</li>
          <li className="footerItem m-1 p-1">Booking Policy</li>
        
        </ul>
         <ul className="footerl m-1 p-1 text-lg">
          <li className="footerItem m-1 p-1">services</li>
          <li className="footerItem m-1 p-1">Hotels</li>
          <li className="footerItem m-1 p-1">Resots & villa's</li>
          <li className="footerItem m-1 p-1">Apartment</li>
        
        </ul>
        

        <ul className="footerl m-1 p-1 text-lg">
          <li className="footerItem m-1 p-1">Contact Us</li>
          <li className="footerItem m-1 p-1">📧 Email: stayease@gmail.com</li>
          <li className="footerItem m-1 p-1">📱 Phone: +1-234-567-890</li>
          
        </ul>
 
      </div>
     <span className='ml-36 p-5  text-left'>@2025 All copyright reserved by StayEase</span>
      
    </div>
  )
}

export default Footer
