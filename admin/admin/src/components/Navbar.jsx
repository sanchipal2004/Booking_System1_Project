import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    
          <nav>

      <div className="  p-1 flex  bg-cyan-950 justify-around items-center mx-auto text-white">
        <span className="logo p-1 m-3 font-bold text-4xl text-rose-500">StayEase
        </span>      
        <ul className='flex gap-8 mx-9'>
          <li className='cursor-pointer hover:font-bold font-sans transition-all text-xl flex gap-2 ' >
            <lord-icon
              src="https://cdn.lordicon.com/wmwqvixz.json"
              trigger="hover"
              colors="primary:#f43f5e"
              style={{ "width": "25px", "height": "25px", }}>

            </lord-icon>
            Home
          </li>

          <li className='cursor-pointer hover:font-bold font-sans transition-all text-xl flex gap-2 '>
            <lord-icon
              src="https://cdn.lordicon.com/jnzhohhs.json"
              trigger="hover"
              colors="primary:#f43f5e"
              style={{ "width": "25px", "height": "25px", }}>

            </lord-icon>About</li>
          <li className='cursor-pointer hover:font-bold font-sans transition-all text-xl flex gap-2'>
            <lord-icon
              src="https://cdn.lordicon.com/srsgifqc.json"
              trigger="hover"
              colors="primary:#f43f5e"
              style={{ "width": "25px", "height": "25px", }}>
            </lord-icon>Contact</li>
         
        </ul>

        <div className="navitems  ">
          <button className=' rounded-xl p-2 w-28 m-2 text-xl hover:font-bold bg-rose-500 cursor-pointer'>Register</button>
          <button className=' rounded-xl p-2 m-3 w-28 text-xl hover:font-bold bg-rose-500 cursor-pointer' >Login</button>
        </div>

      </div>
     
    </nav>
    
  )
}

export default Navbar


