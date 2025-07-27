import mongoose from "mongoose";

const BookingSchema= new mongoose.Schema({
    userId: {
    type: String,
    required: true,
  },
  hotelId: {
    type: String,
    required: true,
  },
  rooms: {
    type: [String],
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    enum: ['online', 'cash'],
    default: 'online',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

export default mongoose.model("Booking",BookingSchema)