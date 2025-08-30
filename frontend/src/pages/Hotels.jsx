
  import React, { useContext, useState } from 'react'
import Navbar from '../assets/components/Navbar'
import Header from '../assets/components/Header' 
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format, setDate } from "date-fns"
import useFetch from '../hooks/useFetch';
import Searchitem from './Searchitem';


const Hotels = () => {
  const location= useLocation();
    const [destination,setdestination]=useState(location.state.destination);
    const [date,setdate]=useState(location.state.date);
    const [openDate,setDate]=useState(false);
    const [options,setoptions]=useState(location.state.options);
    const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

    const {data,loading,error,reFetch}=useFetch(`api/Hotels?city=${destination}&min=${min || 0 }&max=${max || 500000}`);

   
 

    const handleClick = () => {
      
    reFetch();
  };
  
  return (
    <div>
      <Navbar/>
  <div className="div ">
    <video className='relative h-96 w-full object-cover' src="bg.mp4" autoPlay muted loop>
        
       </video>
    <div className="card  text-white absolute top-24 left-96 mx-36 p-28 h-80 flex flex-col gap-4"  >
       
        <h1 className='text-5xl   font-sans font-bold text-center '>Your next adventure begins here</h1>
        <p className='text-3xl  font-sans font-bold text-center '> Book with ease, stay with comfort.</p>

    </div>
   
    <div className="listcontainer flex p-2 justify-between bg-slate-200 ">
      <div className="listwrapper flex p-1 mx-25   gap-4">
    
        <div className={` transition-all duration-300 ease-in-out overflow-hidden flex-1 h-max rounded-md mx-14  bg-rose-500  ${DateRange?"w-72": "w-0"}`}>
          <h1 className=' font-normal text-xl text-center  '>Search</h1>
          <div className="listitem  ">
            <label className='font-medium text-xl text-black'> Destination</label>
            <input className='p-2 rounded-sm m-2' placeholder=" destination" type="text" name="" id="" 
            value={destination}
  onChange={(e) => setdestination(e.target.value)}/>
          </div>
          <div  className="listitem">
            <label className='font-medium text-xl' >Check-In-Date</label>
           <div onClick={()=>setDate(!openDate)} className='bg-white rounded-sm p-2 m-1 cursor-pointer'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
         </div>
          </div>
          {openDate && (
    <DateRange className=' my-2 rounded-sm' 
        onChange={item => setdate([item.selection])}
        minDate={new Date()}
        ranges={date}
         />)}
         <div className="lsitem ">
          <label className=' font-medium text-xl'>Options</label>
          <div className="lsoptionitem justify-between p-2  flex" >
            <span className="lsoptiontext">Min price  <small>per night</small></span>
            <input type="number" onChange={e=>setMin(e.target.value)} className='w-20' />
          </div>
          <div className="lsoptionitem p-2 justify-between flex">
            <span className="lsoptiontext font-sans">Max price  <small>per night</small></span>
            <input type="number" onChange={e=>setMax(e.target.value)} className='w-20' />
          </div>
          <div className="lsoptionitem p-2 justify-between flex ">
            <span className="lsoptiontext">Adult</span>
            <input type="number" className='w-20' placeholder={options.adult}/>
          </div>
          <div className="lsoptionitem p-2  justify-between flex"> 
            <span className="lsoptiontext">Children</span>
            <input type="number" className='w-20' placeholder={options.children} />
          </div>
          <div className="lsoptionitem p-2 justify-between flex">
            <span className="lsoptiontext">room</span>
            <input type="number" className='w-20' placeholder={options.room}/>
          </div>
        </div>
        <div className="searchbox bg-cyan-800 text-white
           font-medium m-2 p-1 rounded-sm text-center">
          <button onClick={handleClick}>Search</button>
          </div>
        </div>
    </div>
         <div className="items flex-col flex w-74 mx-12 ">

 {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <Searchitem item={item} key={item._id} />
                ))}
              </>
            )}
            </div>
            </div></div>
</div>
  
    )
  }
  
  export default Hotels
  