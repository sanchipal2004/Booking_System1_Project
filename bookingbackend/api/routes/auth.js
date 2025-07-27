import express from "express"
 import Users from "../models/Users.js";
 import bcrypt from "bcryptjs";
 import createError from "../../utilis/error.js";
 import jwt from "jsonwebtoken";
const router = express.Router();
 router.post("/register", async(req,res,next)=>{

  try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
   const newUser = new Users({
    username:req.body.username,
    email:req.body.email,
    password: hash,
   });
   await newUser.save();
   res.status(200).send("you register successfully")
  }
  catch(err){
    next(err)

  }
 })

 router.post("/login",async(req,res,next)=>{
  try{
    const User= await Users.findOne({
      username:req.body.username})
      if(!User)return next(createError(404,"User not found!"))


    const isPasswordCorrect= await bcrypt.compare(req.body.password, User.password); // true
      if(!isPasswordCorrect)return next(createError(400,"wrong password or username"));
      const token= jwt.sign({id: User._id, isAdmin: User.isAdmin},process.env.JWT);
      



        const {password,...otherDetails}= User._doc
      res.cookie("access_token",token,{
        httpOnly:true,
      }).status(200).json({password, ...otherDetails});
  
   
    
  }catch(err){
    next(err)
  }
 })

export default router