import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// @desc    Get all users
// @route   GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a user
// @route   POST /api/users
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  const existingUser = await User.findOne({
    email: email,
  });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const saltPassword = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, saltPassword);

  newUser.consumption = [];
  newUser.breakfast = [];
  newUser.lunch = [];
  newUser.dinner = [];
  newUser.snacks = [];
  newUser.BurntCalories = [];
  newUser.workout = [];
  const token = jwt.sign({ email: newUser.email}, 'secret', { expiresIn: '24h' });
  newUser.token = token;
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// @desc    Sign in
// @route   POST /api/users/signin
const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log("DDDDDDD",email,password);
  const user = await User.findOne({
    email: email,
  });
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '24h' });
  const signInUser = await User.findOne({
    email: email,
  });
  signInUser.token = token;
  await signInUser.save();
  res.status(200).json({ message: 'Sign in successful', token: token, user: signInUser });
}

export { getUsers, createUser,signIn };
