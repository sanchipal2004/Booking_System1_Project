import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../assets/components/context/AuthContext'
import Navbar from '../assets/components/Navbar'
import axios from 'axios'

const Login = () => {
  const [form ,setform]=useState({
    username: "",
    password: "",
  })



const navigate =useNavigate()


  const handlechange=(e)=>{
  
  setform((prevdata)=>({
    ...prevdata,
    [e.target.id]:e.target.value
    }))
  }

const {loading,error,dispatch}= useContext(AuthContext);

const   handleClick = async(e)=>{
  e.preventDefault();

  dispatch({type:"LOGIN_START"});
  try{
    const res=await axios.post("/api/auth/login",form);
    dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    navigate("/")
  }catch(err){
    dispatch({type:"LOGIN_FAILED",payload:err.res?.data})
    navigate('/register')
  }
}


 
   

  
  return (
    <div>
      <Navbar/>
    <div className="loginpage w-full overflow-hidden  h-[400px] md:h-[892px] flex ">
       <video className='  w-full object-cover' src="bg.mp4" autoPlay muted loop>
        
       </video>
        
        </div>
        <div className="heading absolute top-52 left-96   items-center ">
 <h1 className='text-5xl  text-white font-bold mx-64'>Taking you to the best Hotel</h1>
 <h1 className=' text-xl text-white    mx-96 absolute left-24 m-5'>Please Login to Book Now</h1></div>
    <div className="wrapper absolute top-80 left-96 mx-96">
      <div className="container py-64  w-96 ">
        <input type="checkbox" id="signup_toggle" />
        <form className="form  "  >
          <div className="form_front ">
            
            <div className="form_details">Login</div>
            <label>
              <input className= "input" type='text' 
              id="username"
              onChange={handlechange}
              value={form.username}
              />
              <span className='text-white'>username</span>
            </label>
            <label>
              <input className=" input "type="password" 
              onChange={handlechange}
              value={form.password}
              id="password"/>
              <span className='text-white'>password</span>
            </label>
             <button className="btn" onClick={handleClick} disabled={loading}>Submit</button>
          </div>

  
      
        </form>
      </div>
      </div>
    </div>




  )
}

export default Login
