import express from 'express'
import razorpay from 'razorpay'
import Booking from '../models/Booking.js'
const router = express.Router()

const detail = new razorpay ({
    key_id:"rzp_test_abc123",
    key_secret:"secret123"
})
 router.post('/payment',async(req,res)=>{
    const {amount} = req.body;
     console.log(" Incoming Amount:", amount);  

     if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }
    try{
const order = await detail.orders.create({
    amount:amount*100,
    currency: 'INR',
    receipt:`rcpt-${Date.now()}`
});
res.status(200).json(order);
    }catch(err){
res.status(500).json({error:err.message})
    }

 })

export default router