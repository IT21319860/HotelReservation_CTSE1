const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT
const generateToken = (id, userType) => {
  return jwt.sign({ id, userType }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// @route   POST /api/auth/register
// @desc    Register new user
exports.registerUser = async (req, res) => {
  const { name, email, password, mobile, nic, userType } = req.body;

  try {
    // Check if email or NIC already exists
    const existingUser = await User.findOne({ $or: [{ email }, { nic }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or NIC already in use' });
    }

    const user = await User.create({
      name,
      email,
      password,
      mobile,
      nic,
      userType, // Optional — defaults to 'staff'
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      nic: user.nic,
      userType: user.userType,
      token: generateToken(user._id, user.userType),
    });

  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

// @route   POST /api/auth/login
// @desc    Login with email & password only
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(user._id, user.userType);

    res.status(200).json({
      token,
      userType: user.userType,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        nic: user.nic,
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
