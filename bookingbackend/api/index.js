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
    const uri =
      process.env.NODE_ENV === "local"
        ? process.env.MONGO_URI_LOCAL
        : process.env.MONGO_URI_ATLAS;
  
        await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  console.log("connect to mongodb.")
} catch (error) {
  throw error;
}
}
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
const allowedOrigins = [
  "https://booking-system1-project.vercel.app", // deployed frontend
  "http://localhost:5173", // local React dev
  "http://localhost:3000", // optional dev
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  connect()
  console.log("connected to backend!.")
});

