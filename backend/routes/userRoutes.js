
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // 🌟 Ensure the .js extension is present

const router = express.Router();


router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "⚠️ All fields are required!" });
  }

  try {
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(400).json({ message: "❌ This email is already registered!" });
    }

   
    const newUser = new User({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password, 
    });

    await newUser.save();
    res.status(201).json({ message: "Account created successfully! ✅" });

  } catch (error) {
    console.error("Registration crash trace:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "❌ Account not found. Please register!" });
    }

    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "❌ Invalid email or password" });
    }

   
    const token = jwt.sign(
      { id: user._id, email: user.email },
      'YOUR_JWT_SECRET', 
      { expiresIn: '30d' }
    );

    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token, 
    });

  } catch (error) {
    console.error("Login verification crash trace:", error);
    res.status(500).json({ message: "Server error during validation check." });
  }
});

export default router;