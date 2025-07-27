import express from 'express'
import Booking from '../models/Booking.js'


const router = express.Router();

// POST /api/Booking
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body); // req.body contains booking details
    const savedBooking = await newBooking.save(); // save to MongoDB
    res.status(200).json(savedBooking); // send response back
  } catch (err) {
    res.status(500).json({ error: "Booking save failed", message: err.message });
  }
});

export default router;