const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// POST: Create a new reservation
router.post('/', async (req, res) => {
  try {
    const { userId, roomId, checkIn, checkOut } = req.body;

    // Basic validation
    if (!userId || !roomId || !checkIn || !checkOut) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const reservation = new Reservation({ userId, roomId, checkIn, checkOut });
    await reservation.save();
    res.status(201).json({ message: 'Reservation created successfully', reservation });
  } catch (err) {
    res.status(500).json({ message: 'Error creating reservation', error: err.message });
  }
});

// GET: Get all reservations for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const reservations = await Reservation.find({ userId: req.params.userId }).populate('roomId');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reservations', error: err.message });
  }
});

module.exports = router;
