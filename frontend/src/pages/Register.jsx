import React, { useContext, useState } from 'react'
import Navbar from '../assets/components/Navbar'
import './Register.css'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../assets/components/context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {


    const[formdata,setformdata]=useState({
      username:"",
      email:"",
      password:"", 
  })
  
const navigate=useNavigate()

const handlechange=(e)=>{
  setformdata((previ)=>({
    ...previ,
    [e.target.id]:e.target.value
  }))
}

const {loading,dispatch,error}=useContext(AuthContext)
const handleClick= async (e)=>{
  e.preventDefault();

dispatch({type:"LOGIN_START"});
try{
const res= await axios.post("https://booking-backend-fnxh.onrender.com/api/auth/register",formdata)
dispatch({type:"LOGIN_SUCCESS", payload:res.data});
  navigate('/')


}catch(err){
dispatch({type:"LOGIN_FAILED",payload:err.res?.data})
}}
  return (
    <div>

          <Navbar/>
 
        <div className="card absolute top-32 left-10 bg-black mx-96  ">
          
          <img className='opacity-45  relative'src="loginbg1.png " alt="" />
          <div className='absolute top-32 left-2 gap-2  flex flex-col  text-white'>
           
            <h1 className='text-4xl text-center font-bold'>Hello! welocome to the StayEase </h1>
            <h2 className='text-3xl text-center font-bold'>Booking website</h2>
            <span className='text-center text-sm'>Don't have an account yet?</span>
            <button className='bg-cyan-700 w-24 p-2 text-center mx-60'>sign up</button>
             <img className='w-96 mx-20'src="Secure-login.png" alt="" />
          </div>
          <div className="registerinfo absolute top-0 right-0 w-1/2 h-full">
       <div className="form-wrapper absolute top-56 left-28 ">
      <form className="form-box">
        <h2 className="form-title  text-2xl">Sign Up</h2>

        <div className="input-field">
        <label>
          <input type="text" placeholder="Username" onChange={handlechange} value={formdata?.username} id="username"/>
        </label>
</div>
        <div className="input-field">
          <label>
          <input type="email" placeholder="Email" onChange={handlechange} value={formdata?.email} id="email" />
        </label>
        </div>

        <div className="input-field password-field">
          <label>
          <input type="password" placeholder="Password" onChange={handlechange} value={formdata?.password} id='password'  />
       </label> </div>

        <button  type="submit" disabled={loading} onClick={handleClick}className="submit-btn">Create Account</button>

        <p className="footer-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
 

        </div>
        </div>
    </div>
  )
}

export default Register
