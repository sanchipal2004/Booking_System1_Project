import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/Hotels.js"
import hotelpaymentRoute from "./routes/hotelpayment.js"
import cookieParser from 'cookie-parser'
import bookingRoute from './routes/booking.js'
import cors from 'cors'

const app = express()
dotenv.config()

const connect = async ()=>{
try {
  await mongoose.connect("mongodb://localhost:27017");
  console.log("connect to mongodb.")
} catch (error) {
  throw error;
}
};
mongoose.connection.on("disconnected", ()=>{
console.log("mongodb disconnected")
})
mongoose.connection.on("connected", ()=>{
console.log("mongodb connected")
})

app.get("/" , (req,res)=>{
  res.send("hello first request")

})

//middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/Hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/hotelpayment",hotelpaymentRoute); 
app.use("/api/booking",bookingRoute);




app.use((err,req,res,next)=>{
  const errorStatus= err.status || 500
  const errorMessage= err.message ||"something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})

app.listen(3000, ()=>{
  connect()
  console.log("connected to backend!.")
});