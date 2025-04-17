const express = require('express');
const { registerUser, loginUser, getAllUsers, updateUser, deleteUser } = require('../controllers/authController');

const router = express.Router();

const { protect, isAdmin } = require('../middleware/authMiddeleware');

router.get('/users', protect, isAdmin, getAllUsers);
router.put('/users/:id', protect, isAdmin, updateUser);
router.delete('/users/:id', protect, isAdmin, deleteUser);


router.post('/register', registerUser);
router.post('/login', loginUser);
//router.get('/users', getAllUsers);

module.exports = router;
