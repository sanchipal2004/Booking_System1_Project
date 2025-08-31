import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import "./featured.css"
const Features = () => {
  const {data,loading,error}= useFetch("api/Hotels/countByCity?cities=mumbai,udaipur,bengluru,goa");
 
  const navigate=useNavigate()
  const handleclickcity=(city)=>{
     navigate("/Hotels", { state: { destination: city, date: [{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }], options: { adult: 1, children: 0, room: 1 } }});
};

  return (
    <div>{loading ?("Loading please wait"):(<>
      <div className="featuresItems flex justify-center mx-20 p-9  ">
      

        <div className="images m-4 p-5 font-medium overflow-hidden gap-3">
        <img className='rounded-md border border-gray-600 w-96 ' onClick={()=>handleclickcity("mumbai")} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/40/ce/c3/mumbai-marine-drive-along.jpg?w=600&h=-1&s=1" alt="" />
        <div className="titles p-1 m-1 text-lg ">
        <h3>mumbai</h3>
        <p>financial capital of India</p>
        <h2>{data?.[0]}Properties</h2>
        </div>
        </div>
        <div className="images m-4 p-5 font-medium   gap-4">
        <img className='rounded-md border border-gray-600 w-96 h-60 'onClick={()=>handleclickcity("udaipur")} src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/221.jpg"  alt="" />
        <div className="titles p-1 m-1 text-lg">
        <h3 >udaipur</h3>
        <p>The City of Light</p>
        <h2>{data?.[1]}Properties</h2>
        </div>
        </div>
        <div className="images m-4 p-5 font-medium  gap-4">
        <img  className='rounded-md border border-gray-600 w-96 h-60' onClick={()=>handleclickcity("bengluru")}src="https://s7ap1.scene7.com/is/image/incredibleindia/vidhana-soudha-bangalore-karnataka-hero?qlt=82&ts=1742199603184" alt="" />
        <div className="titles p-1 m-1 text-lg">
        <h3 >bengluru</h3>
        <p> India's most romantic city</p>
        <h2>{data?.[2]}Properties</h2>
      </div>
      </div>

       <div className="images m-4 p-5 font-medium  gap-4">
        <img  className='rounded-md border border-gray-600 w-96 h-60'onClick={()=>handleclickcity("goa")} src="https://s3.india.com/wp-content/uploads/2024/06/List-of-8-Famous-Beaches-Around-Goa.jpg?impolicy=Medium_Widthonly&w=350&h=263" alt="" />
        <div className="titles p-1 m-1 text-lg">
        <h3 >goa</h3>
        <p>Pearl of the Orient </p>
        <h2>{data?.[3]}Properties</h2>
      </div>
      </div>
      
      </div></>)}
    </div>
  )
}

export default Features
