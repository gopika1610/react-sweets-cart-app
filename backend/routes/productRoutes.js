import express from 'express';
import Product from '../models/Product.js'; 

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    console.log("⚡ MongoDB Dynamic Data Fetching Initialized via /api/products...");
    
   
    const databaseProducts = await Product.find({});
    
    console.log(`📦 Pulled ${databaseProducts.length} unique products directly from Database!`);
    
   
    res.status(200).json(databaseProducts);
  } catch (error) {
    console.error("❌ MongoDB Query Engine Error:", error.message);
    res.status(500).json({ 
      message: "Database integration error inside productRoutes router block", 
      error: error.message 
    });
  }
});


export default router;