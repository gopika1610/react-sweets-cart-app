
import express from 'express';
import Cart from '../models/Cart.js'; 

const router = express.Router();

// 1. GET CART ITEMS SPECIFIC TO LOGGED IN USER
// GET /api/cart?userId=XXXXXX
router.get('/', async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "⚠️ User ID query parameter is required!" });
  }

  try {
    // Find the unique cart document linked specifically to this user
    const userCart = await Cart.findOne({ userId: userId });
    
    // If cart doesn't exist yet, return an empty array []
    return res.json(userCart ? userCart.items : []);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// 2. ADD SINGLE ITEM OR UPDATE QUANTITY FOR LOGGED IN USER
// POST /api/cart/add
router.post('/add', async (req, res) => {
  const { userId, productId, name, price, imageUrl, quantity } = req.body;

  // Robust validation checks to shield database layer
  if (!userId || !productId) {
    return res.status(400).json({ message: "⚠️ User ID and Product ID are mandatory payload fields!" });
  }

  try {
    // Step A: Find the user's cart or create a fresh instance mapping safely
    let userCart = await Cart.findOne({ userId: userId });
    if (!userCart) {
      userCart = new Cart({ userId: userId, items: [] });
    }

    // Step B: Direct safe string cast to evaluate element inside sub-document matrix
    const targetProductId = String(productId);
    const itemIndex = userCart.items.findIndex(item => String(item.productId) === targetProductId);

    if (itemIndex > -1) {
      // Item exists -> Safely scale increment values
      userCart.items[itemIndex].quantity += Number(quantity || 1);

      // If quantity drops to 0 or below, drop item from user list
      if (userCart.items[itemIndex].quantity <= 0) {
        userCart.items.splice(itemIndex, 1);
      }
    } else {
      // Item doesn't exist -> Push fresh record row inside internal array matching templates
      const targetQty = Number(quantity);
      if (targetQty > 0) {
        userCart.items.push({
          productId: targetProductId,
          name,
          price: Number(price),
          imageUrl: imageUrl || '',
          quantity: targetQty
        });
      }
    }

    // Step C: Save changes and send back the active list state directly to React context updates
    await userCart.save();
    return res.status(200).json(userCart.items);

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// 3. REMOVE COMPLETE ITEM ROW ENTRY FROM AN INDIVIDUAL'S CART
// DELETE /api/cart/remove/:productId?userId=XXXXXX
router.delete('/remove/:productId', async (req, res) => {
  const targetId = req.params.productId;
  const { userId } = req.query; 

  if (!userId || !targetId) {
    return res.status(400).json({ message: "⚠️ User ID and Product ID parameters are required!" });
  }

  try {
    const userCart = await Cart.findOne({ userId: userId });

    if (!userCart) {
      return res.status(404).json({ message: 'Cart record collection structure not found for this profile.' });
    }

    const targetProductId = String(targetId);
    const itemIndex = userCart.items.findIndex(item => String(item.productId) === targetProductId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Product item target execution not found in cart list.' });
    }

    // Splice targeted indexed array profile out completely
    userCart.items.splice(itemIndex, 1);
    await userCart.save();

    return res.json(userCart.items);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
