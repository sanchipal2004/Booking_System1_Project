import React from 'react'
import './Book.css'
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext1 } from './context/SearchContext1';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { get } from 'react-hook-form';
import { AuthContext } from './context/AuthContext';


//load razorpay script

const loadrscript= ()=>{
  return new Promise((resolve)=>{
    const script =document.createElement("script");
    script.src="https://checkout.razorpay.com/v1/checkout.js";
    script.onload=()=> resolve(true);
    script.onerror=()=>resolve(false);
    document.body.appendChild(script)
  })
}

const Book = ({ setOpen, hotelId }) => {
    const [selectedRoom,setselectedRoom]= useState([])
  const { data, loading, error } = useFetch(`/api/Hotels/rooms/${hotelId}`);
  const {date}=useContext(SearchContext1)
  const{user}=useContext(AuthContext)
  
 const navigate= useNavigate()
const handleClick= async()=>{
  if (!user) {
    alert("You must be logged in to book a room.");
    return navigate("/login"); 
  }

 try{
  await Promise.all(selectedRoom.map((roomId)=>{
    const res = axios.put(`/api/rooms/availability/${roomId}`,{
      date:alldates,
    }); return res.data
  }));

    setOpen(false);
      navigate("/");
      alert("your room is booked!")

 }catch(err){
 alert("booking failed!",err)
 }
}
// to cover all dates in range
const getDatesInRange=(startDate,endDate)=>{
    const start = new Date(startDate);
    const end=new Date(endDate);
    const date=new Date(start.getTime());

    const dates = [];
    while(date <= end){
        dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
return dates
};
const alldates= (getDatesInRange(date[0].startDate,date[0].endDate))
// check room available 

const isAvailable=(roomNumber)=>{
const isFound= roomNumber.unavailableDates.some((date)=>
    alldates.includes(new Date(date).getTime())
)
return !isFound
}



 const handleSelect=(e)=>{
const checked= e.target.checked
const value=e.target.value
setselectedRoom(checked?[...selectedRoom,value]:selectedRoom.filter((item)=>item!==value))
 }
 console.log(selectedRoom)  
  
  return (
    <div className="reserve">
      <div className="rContainer">
          <img className='w-6 absolute top-0 right-0 cursor-poniter' src="/cross.png" alt=""
          onClick={() => setOpen(false)}
    />
    
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item?._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item?.title}</div>
              <div className="rDesc">{item?.desc}</div>
              <div className="rMax">
                <b> Max People: {item?.maxPeople}</b>
              </div>
              <div className="rPrice">{item?.price}</div>
              </div>
              <div className="rSelectRooms">
                {item?.roomNumbers.map((roomNumber)=>(
                    <div className="room">
                    <label>{roomNumber.number}</label>
                    <input type="checkbox" value={roomNumber._id} onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}/>
                    </div>
                ))}
          
     </div>
         
          </div>
        ))}
        <button onClick={handleClick}  disabled={selectedRoom.length === 0} className="rButton" >
        Book Now
        </button>
      </div>
    </div>
  );
};


export default Book
