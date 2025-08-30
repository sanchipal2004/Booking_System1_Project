import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext1 } from '../assets/components/context/SearchContext1';
const Searchitem = ({item}) => {
  const {date}=useContext(SearchContext1);
  return (
    
    <div>

      <div className="searchItem flex border border-gray-400 bg-white rounded p-2 m-2" >
    
      <img className=' w-80   object-cover' src={item.photos[0]} alt="" />
      <div className="des flex flex-col gap-4 p-1 mx-5 ">
        <h1 className="title text-cyan-950 font-sans font-bold text-3xl">{item.name}</h1>
        <span className="distance text-lg font-light">
        {item.distance}km from center</span>
        <span className="taxioption bg-rose-600  w-36 rounded text-center text-white">
          Free Airport Taxi</span>
        <span className="subtitle text-lg font-sans font-semibold">
          Studio Apartment With Air Conditioning</span>
        <span className="features text-lg font-sans font-light mx-2">
         {item.desc}</span>
        <span className="cancleoption text-lg  font-semibold font-sans text-rose-700">
          Free Cancellation</span>
        <span className="cancleopsubtitle text-lg font-sans text-cyan-800">
          You can cancle later,so lock in this great price today!</span>
      </div>
      <div className="details flex flex-col gap-6 text-end justify-between ">
        {item.rating &&<div className="itemsdetails flex flex-1 justify-between w-64 mx-44">
        <h1 className='font-sans font-medium text-lg'>Excellent</h1>
        <span className='bg-rose-500 h-10 w-10 rounded-sm text-lg  text-center text-white'>{item.rating}</span>
        </div>}
        <div className=" payments flex gap-5 flex-col text-right mx-44">
        <span className='font-sans text-3xl  '>Rs{item.cheapestPrice}</span>
        <span className='font-sans text-lg '>includes taxes and fees</span>
        
       </div>
       <div className="button text-right mx-44">
        {date[0]?.startDate && date[0]?.endDate ? (
        <Link to={`/product/${item._id}`} >
       <button className='bg-cyan-800 text-white rounded font-sans text-lg font-semibold w-72 px-5 p-1'> See availability</button>
      </Link>):(
        <button className='bg-cyan-800 text-white rounded font-sans text-lg font-semibold w-80 px-5 p-1'disabled>select date to check availability</button>
      )} </div>
      </div>
     
    </div>
    </div>

  )
}


export default Searchitem
