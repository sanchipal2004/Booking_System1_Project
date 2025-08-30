import express  from "express"
import Hotels1 from "../models/Hotels1.js"
import { verifyadmin,verifytoken,verifyuser } from "../utilis/verifytoken.js"

import Rooms from "../models/Rooms.js"
const router= express.Router()

router.get("/checkauthentication", verifytoken, (req, res,next) => {
  res.send("hello user,you are logged in !")
});

router.get("/checkuser/:id", verifyuser, (req, res,next) => {
  res.send("hello user,you are logged in and you are delete your account!")
});

router.get("/checkadmin/:id", verifyadmin, (req, res,next) => {
  res.send("hello admin,you are logged in and you are delete all account!")
});
//create
router.post("/", async (req,res)=>{
    //take info from user
    const newHotels1=  new Hotels1((req.body))
    try{
        const saveHotels1= await newHotels1.save()
        res.status(200).json(saveHotels1)

    }catch(err){
        res.status(500).json(err)
    }

})
//update
router.put("/:id",async(req,res)=>{
    try{
        const updateHotels1=await Hotels1.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
            res.status(200).json(updateHotels1) 
    }
    catch(err){
        res.status(500).json(err)
    }
})
//get
router.get("/find/:id",async(req,res)=>{
    
    try{
        const Hotels=await Hotels1.findById(
            req.params.id
        )
            res.status(200).json(Hotels) 
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id",async(req,res)=>{
    
    try{
        await Hotels1.findByIdAndDelete(
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
   const { min, max, limit,city, ...others } = req.query;
    try{
         const Hotels = await Hotels1.find({
      ...others,...(city&&{city:{$regex:new RegExp(city, "i")}}),
      cheapestPrice: { $gt: min ? Number(min) : 0, $lt: max ? Number(max) : 500000 },
    }).limit(Number(req.query.limit));

            res.status(200).json(Hotels) 
    }
    catch(err){
        next(err)

    }
})

router.get("/countByCity", async(req,res,next)=>{
     const cities= req.query.cities?.split(",");

    try{
       
        const list = await Promise.all(cities.map((city)=>{
            return Hotels1.countDocuments({city:city})
            
        }));
        
            res.status(200).json(list) 
           
    }
    catch(err){
        next(err)

    }
})

router.get("/countByType",async(req,res,next)=>{

    
    try{
       const hotelcount= await Hotels1.countDocuments({type:"hotel"})
       const apartmentcount= await Hotels1.countDocuments({type:"apartment"});
       const resortcount= await Hotels1.countDocuments({type:"resort"});
       const villacount= await Hotels1.countDocuments({type:"villa"});
       const guesthousecount= await Hotels1.countDocuments({type:"guesthouse"});
       const holidayhousecount= await Hotels1.countDocuments({type:"holidayhouse"});
       const bandbscount = await Hotels1.countDocuments({type:"b&bs"});
        
        res.status(200).json([
            {type:"hotel",count:hotelcount},
            {type:"apartment",count:apartmentcount},
            {type:"resort",count:resortcount},
            {type:"Villa",count:villacount},
            {type:"guesthouses",count:guesthousecount},
            {type:"holidayhouses",count:holidayhousecount},
            {type:"b&bs",count:bandbscount}


        ]);
    }catch(err){
next(err)
    }
})

router.get("/rooms/:id", async(req,res,next)=>{
    try{
        const Hotels= await Hotels1.findById(req.params.id)
        const list=await Promise.all(Hotels.rooms.map(room=>{
            return Rooms.findById(room)
        }));
       res.status(200).json(list)
    }
    catch(err){
    next(err)
    }

})


export default router