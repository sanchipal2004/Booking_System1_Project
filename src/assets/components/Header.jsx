import React, { Children, useContext } from 'react'
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';
import { SearchContext1 } from './context/SearchContext1';


const header = () => {
  const [showdate, setshowdate] = useState(false)
  const [destination ,setdestination] = useState("")
  const  [showoptions, setshowoptions] = useState(false)
  const [options, setoptions] = useState(
    {
      adult: 1,
      children: 0,
      room: 1,
    }
  );
  const navigate= useNavigate()

  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const handlechange = (name, operation)=>{
    setoptions((prev)=>{
      return {
      ...prev ,
      [name] : operation ==="i" ? options[name] + 1 : options[name] -1,

    };
  });

    };

const {dispatch}= useContext(SearchContext1)

const handlesearch=()=>{
  dispatch({type:"NEW_SEARCH",payload:{destination,date,options}})
  navigate("/Hotels",{state:{destination,date,options}});
}

    
  
  return (
    <div>
      <div className="heading text-white p-20 flex flex-col mx-auto gap-2">
        

        <h1 className='text-5xl m-2 p-1 font-sans font-bold text-center'>Find your next stay</h1>
        <p className='text-4xl m-2 p-1 font-sans font-bold text-center'>Search low price hotels for your vacation</p>

        <div className="headersearch m-2 p-1  flex  justify-center " onChange={e=>setdestination(e.target.value)}>

          <input placeholder='Destination' className='p-2 border border-rose-500 h-14 w-1/4 text-black cursor-text ' type="text" required="true" />
     
          <div className="date p-2 border border-rose-500 h-14 w-1/4 text-gray-300 cursor-pointer z-30 bg-white ">
            <lord-icon
              src="https://cdn.lordicon.com/wmlleaaf.json"
              trigger="hover"
            >
            </lord-icon>
            <span onClick={() => setshowdate(!showdate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}

            </span>
            {showdate && <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />}</div>
         
         <div className="date p-2 border border-rose-500 h-14 w-1/4 text-gray-300 cursor-pointer bg-white z-30 flex justify-around relative">
          <span onClick={()=> setshowoptions(!showoptions)}>{`${options.adult} adult .${options.children} children .${options.room} room`}</span>
         {showoptions && <div  className="options absolute top-14 w-26 rounded-lg  bg-white text-black  ">
            <div className="optionsItem  ">
            <div className="counter flex gap-7  justify-between ">
              <span className="textname ">Adult</span>

              <button className='w-6 bg-rose-500 hover:font-extrabold  cursor-pointer border m-2 border-zinc-900' onClick={()=>handlechange("adult","d")} disabled={options.adult <= 1}> -</button>
              <span className=' '>{options.adult}</span>
              <button  className='w-6 bg-rose-500  hover:font-extrabold m-2  border border-zinc-900 cursor-pointer' onClick={()=>handlechange("adult","i")} >+</button>
            </div>
            </div>
            <div className="optionsItem  ">
            <div className="counter flex gap-10 justify-between">
              <span className="textname ">children</span>
              <button className='w-6 bg-rose-500  hover:font-extrabold m-2 -mx-5  border border-zinc-900 cursor-pointer'  onClick={()=>handlechange("children","d")}disabled={options.children <= 1}>-</button>
              <span className=''>{options.children}</span>
              <button  className='w-6  bg-rose-500  hover:font-extrabold m-2  border border-zinc-900 cursor-pointer' onClick={()=>handlechange("children","i")}>+</button>
            </div>
            </div>
            <div className="optionsItem  ">
            <div className="counter flex gap-10 justify-between">
              <span className="textname ">Room</span>
              <button className='w-6 bg-rose-500  hover:font-extrabold m-2 border border-zinc-900 cursor-pointer'onClick={()=>handlechange("room","d")} disabled={options.room <= 1}>-</button>
              <span className=''>{options.room}</span>
              <button  className='w-6 bg-rose-500  hover:font-extrabold m-2  border border-zinc-900 cursor-pointer'onClick={()=>handlechange("room","i")} >+</button>
            </div>
            </div>
          </div>
}
          <button className='bg-rose-500 w-32 hover:font-bold  rounded-sm border border-gray-700' disabled={!destination||!date[0].startDate||!date[0].endDate}  onClick={handlesearch}> Search
          </button>
        
</div>
        </div>

      </div>

    </div>
  )
}

export default header
