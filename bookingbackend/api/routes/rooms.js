import express  from "express"
import Hotels1 from "../models/Hotels1.js"
import Rooms from "../models/Rooms.js";
import { verifyadmin,verifytoken,verifyuser } from "../../utilis/verifytoken.js";
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

router.post("/:hotelid", async(req,res,next)=>{
    const hotelId= req.params.hotelid;
    const newRoom= new Rooms(req.body)

    try{
        const savedRoom= await newRoom.save();
        //to update
        try{
            await Hotels1.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id},});
        }catch(err){
            next()
        }
        res.status(200).json(savedRoom);
    }
    catch(err){
        next()
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const updaterooms=await Rooms.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
            res.status(200).json(updaterooms) 
    }
    catch(err){
        res.status(500).json(err)
    }
})
// update roomnos{unavailability}
router.put("/availability/:id",async(req,res,next)=>{
    try{
        const updateroomsAvailability=await Rooms.updateOne(
        {"roomNumbers._id":req.params.id},{$push:{
            "roomNumbers.$.unavailableDates": { $each: req.body.date } // toupdate nested things
        },}
        );
            res.status(200).json("Room status has been updated") 
    }
    catch(err){
        next(err)
    }
})











//get
router.get("/:id",async(req,res)=>{

    
    try{
        const rooms=await Rooms.findById(
            req.params.id
        )
            res.status(200).json(rooms) 
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id/:hotelid",async(req,res)=>{
    const hotelId= req.params.hotelid;
    try{
        await Rooms.findByIdAndDelete(
            req.params.id
        );
        try{
            await Hotels1.findByIdAndUpdate(hotelId,{
                $pull:{rooms:req.params.id}
            })

        }catch(err){
            next()
        }
            res.status(200).json("room has been delete") 
    }
    catch(err){
        res.status(500).json(err)
    }
})
//getall
router.get("/", async(req,res,next)=>{
    try{
        const rooms =await Rooms.find();
            res.status(200).json(rooms) 
    }
    catch(err){
        next(err)

    }
})




export default router