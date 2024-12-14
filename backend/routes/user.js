const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded.id;
    next();
  } catch (e) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const isMatch = await user.matchPassword(password);
    if (!isMatch) throw new Error('Invalid password');
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/profile', auth, async (req, res) => {
  try {
    const { newPassword, ...rest } = req.body;
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      rest.password = await bcrypt.hash(newPassword, salt);
    }
    await User.findByIdAndUpdate(req.user, rest);
    const updatedUser = await User.findById(req.user).select('-password');
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/profile', auth, async (req, res) => {
  try {
    const userId = req.user;
    await Post.deleteMany({ user: userId });
    await User.findByIdAndDelete(userId);
    res.json({ message: 'User account and associated data deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;