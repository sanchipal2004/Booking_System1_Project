import React from 'react'

const Email = () => {
  return (
    <div>
      <div className="emaillist text-center py-15 ">
        <h1 className='font-medium text-xl'>Save Time,Save Money!</h1>
        <span className='font-normal text-lg'>Sign Up we'll send the best deals to you</span>
      
      <div className="emailcontainer  ">
        <input className='border border-black p-1 m-2' placeholder="Your Email" type="text" />
        <button className='bg-red-400 text-lg rounded-sm font-medium p-1 m-2 w-32 border border-cyan-900 cursor-pointer'>Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default Email
