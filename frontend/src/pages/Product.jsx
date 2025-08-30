import React, { useContext, useState,useMemo } from 'react';
import Navbar from '../assets/components/Navbar'
import Header from '../assets/components/Header'
import Email from '../assets/components/Email';
import Footer from '../assets/components/Footer';
import useFetch from '../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext1 } from '../assets/components/context/SearchContext1';
import { AuthContext } from '../assets/components/context/AuthContext';
import Book from '../assets/components/Book';


export const Product = () => {
  const location = useLocation()
  const id= location.pathname.split("/")[2];
  const [SliderNumber,setSliderNumber]= useState(0);
  const [Open,setOpen] = useState(false); 
   const [openModal, setOpenModal] = useState(false);
  

 
  
const navigate=useNavigate()

const {user}=useContext(AuthContext)
const {data,loading,error}=useFetch(`/api/Hotels/find/${id}`);
const {date,options}= useContext(SearchContext1)


const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

function dayDifference(date1, date2) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays ===0?1:diffDays;
}

const days = useMemo(() => {
  if (date?.[0]?.startDate && date?.[0]?.endDate) {
    return dayDifference(new Date(date[0].endDate), new Date(date[0].startDate));
  }
  return 0;
}, [date]);
  

const handleOpen = (i)=>{
  setSliderNumber(i)
  setOpen(true)
}
const handleMove= (direction)=>{
   
  let newSlideNumber;

  if(direction ==="l"){
    newSlideNumber = SliderNumber === 0 ? 5 : SliderNumber - 1;
  }else{
    newSlideNumber = SliderNumber === 5 ? 0 : SliderNumber + 1;
  }
setSliderNumber(newSlideNumber)
}
 const handleClick=()=>{
  if(user){
    setOpenModal(true);
  }else{
    navigate('/login')
  }
 }



  return (
    <div>
      <Navbar/>
     {loading?("loading"):(
      <div className="hotelcontainer  ">
        {Open && <div className="Slider sticky  px-19   top-0 left-0 w-max h-max mx-96 z-60 bg-slate-200 flex items-center  ">
<img onClick={()=>handleMove("r")} className='w-8 absolute right-0 -mx-96 cursor-pointer' src="/public/next.png" alt="" />
<img   onClick={()=>handleMove("l")} className='w-8 absolute left-0 -mx-80 cursor-pointer'src="/back.png" alt="" />
<img onClick={()=>setOpen(false)} className='w-8 absolute top-0 right-60 cursor-poniter' src="/cross.png" alt="" />
<div className="sliderwrapper flex w-max h-max m-2 p-2 mx-96 items-center  justify-center"> 
  <img className='w-96 h-96  object-cover'src={data.photos[SliderNumber]} alt="" />
</div>

        </div>
       
        }
        <div className="hotelwrapper flex flex-col m-24  mx-96 p-1 gap-2">
          <div className="button absolute flex flex-col mx-24 right-96 px-12 py-2 bg-rose-500 text-center text-lg font-medium cursor-pointer  rounded-sm text-white font-sans">
            <button onClick={handleClick}>Book Now</button>
          </div>
          <h1 className='font-sans text-4xl font-bold'>{data.name}</h1>
          <div className="hoteladdress text-lg font-sans flex">
            <img  className='w-7 p-1'src="/public/location.png"alt="" />
            <span>{data.address}</span>
          </div>
          <span className="hoteldistance text-xl font-sans font-semibold  text-rose-500">Excellent location {data.distance} from center</span>
          <span className="hotelpricehighlight text-lg text-cyan-800 font-medium">Book a stay over $114 at this property and get free taxi for airport</span>
        <div className="hotelimage flex  w-74  flex-wrap ">
          {data.photos?.map((photo,i) =>(
            <div className="hotelimgwrapper ">
              <img  onClick={()=>handleOpen(i)} className='w-96 h-80 object-cover' src={photo} alt="" />
            </div>
          ))}
        </div>
        <div className="hoteldetails flex gap-48">
          <div className="hoteldetailstesxts ">  
            <h1 className="hoteltitle text-3xl m-1 p-1 font-sans font-medium">{data.title}</h1>
            <p className="hoteldes text-lg font-sans m-1 p-1">{data.desc}</p>
            </div>
            <div className="hoteldetailsprice flex-col  flex p-1  bg-cyan-800 w-80 mx-28 text-white rounded-md ">
              <h1 className='font-bold text-2xl p-1'>Perfect for a {days}-night stay!</h1>
              <span className='text-lg m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.odi</span>
           <h2 className='text-2xl font-semibold m-1'><b>{days* data.cheapestPrice || 1 * options?.room|| 0}</b> ({days}nights)</h2>
           
              
           <button className={`font-semibold text-lg  m-2 w-28 rounded-sm mx-24  ${date[0]?.startDate && date[0]?.endDate 
           ?"bg-rose-500 cursor-pointer":"bg-gray-400 cursor-not-allowed"}`}
           onClick={()=>{
            if (date[0]?.startDate && date[0]?.endDate) {
            handleClick();
            }
          else{
            alert("please select the dates")
          }}
        }>Book Now!</button>
           
            </div>
          </div>
        </div>
     
        <Email/>
        <Footer/>
      </div>)}
       {openModal && <Book setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}
export default Product


