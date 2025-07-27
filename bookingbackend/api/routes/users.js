import express  from "express"
import Users from "../models/Users.js"
import  {verifytoken, verifyuser,verifyadmin } from "../../utilis/verifytoken.js";


const router= express.Router();
router.get("/checkauthentication", verifytoken, (req, res,next) => {
  res.send("hello user,you are logged in !")
});

router.get("/checkuser/:id", verifyuser, (req, res,next) => {
  res.send("hello user,you are logged in and you are delete your account!")
});

router.get("/checkadmin/:id", verifyadmin, (req, res,next) => {
  res.send("hello admin,you are logged in and you are delete all account!")
});


//update
router.put("/:id",async(req,res)=>{
    try{
        const updateusers=await Users.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
            res.status(200).json(updateusers) 
    }
    catch(err){
        res.status(500).json(err)
    }
})
//get
router.get("/:id",async(req,res)=>{
    
    try{
        const users=await Users.findById(
            req.params.id
        )
            res.status(200).json(users) 
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/",async(req,res)=>{
    
    try{
        await Users.findByIdAndDelete(
            req.params.id
        );
            res.status(200).json("hotel has been delete") 
    }
    catch(err){
        res.status(500).json(err)
    }
})
//getall
router.get("/", async(req,res,next)=>{
    try{
        const users =await Users.find();
            res.status(200).json(users) 
    }
    catch(err){
        next(err)

    }
})



export default router