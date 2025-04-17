const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { protect, isAdmin } = require('../middleware/authMiddeleware');
const {
  addRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom
} = require('../controllers/roomController');

// Multer config for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.post('/rooms', protect, isAdmin, upload.single('image'), addRoom);
router.get('/rooms', getRooms);
router.get('/rooms/:id', getRoomById);
router.put('/rooms/:id', protect, isAdmin, updateRoom);
router.delete('/rooms/:id', protect, isAdmin, deleteRoom);

module.exports = router;
