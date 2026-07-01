import express from 'express';
import Order from '../models/order.js'; 
import Cart from '../models/Cart.js';

const router = express.Router();

router.post('/place', async (req, res) => {
  try {
    const { userId, items, subtotal, discount, deliveryFee, total, deliveryDetails } = req.body;
    
    // Save new order
    const newOrder = new Order({ userId, items, subtotal, discount, deliveryFee, total, deliveryDetails });
    await newOrder.save();
    
    // Clear cart
    await Cart.findOneAndUpdate({ userId }, { items: [] });
    
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;