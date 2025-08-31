import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
const Guestlove = () => {
  const {data,loading,error}= useFetch("https://booking-backend-fnxh.onrender.com/api/Hotels?featured=true&limit=7")

  const navigate=useNavigate()
  const handlehotelclick=(item)=>{
    navigate(`/product/${item._id}`)
  }


  return (
    <div>
      <div className="propertyl flex gap-7 p-12 mx-24   ">{loading?"loading please wait":<>{data.map(item=>(
        <div className="propertylItems w-60 "key={item._id}>
          <img className='rounded-md border border-cyan-800 cursor-pointer w-80 h-64'onClick={()=>handlehotelclick(item)} src={item.photos[0]} alt="" />
          <div className="propertylTitles text-xl p-1 m-2 ">
            <h1 className='font-bold text-lg  '>{item.name}</h1>
            <p className='font-normal text-sm'>{item.city}</p>
            {item.rating && <div >
              <button className='bg-rose-400 rounded-md  mx-2  '>{item.rating}</button>
              <span className='text-lg font-medium'>Excellent</span>
            </div>}
            <span className=' font-semibold text-base'>Starting from Rs{item.cheapestPrice}</span>
          </div>
          </div>
          ))}
          </>}
       
  
        
            
         
         
              
          
          
      
      </div>
    </div>
  )
}

export default Guestlove
