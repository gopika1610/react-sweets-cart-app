// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import productRoutes from './routes/products.js';
// import cartRoutes from './routes/cartRoutes.js';
// import userRoutes from './routes/userRoutes.js'; 
// import orderRoutes from './routes/orderRoutes.js';
// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);

// app.get('/', (req, res) => {
//   res.send('Backend API is running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';

// // 🌟 Import path-ai 'productRoutes.js' nu correct panniyachu
// import productRoutes from './routes/productRoutes.js'; 

// import cartRoutes from './routes/cartRoutes.js';
// import userRoutes from './routes/userRoutes.js'; 
// import orderRoutes from './routes/orderRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);
// app.get("/api/products", async (req, res) => {
//   const category = req.query.category;
//   const products = await db.products.find({ category: category }).toArray();
//   res.json(products);
// });
// app.get('/', (req, res) => {
//   res.send('Backend API is running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';

// // Import routes
// import productRoutes from './routes/productRoutes.js'; 
// import cartRoutes from './routes/cartRoutes.js';
// import userRoutes from './routes/userRoutes.js'; 
// import orderRoutes from './routes/orderRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes - API endpoints
// app.use('/api/products', productRoutes); 
// app.use('/api/cart', cartRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.send('Backend API is running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Import routes module mapping files
import productRoutes from './routes/productRoutes.js'; 
import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js'; 
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Global Middlewares setup
app.use(cors());
app.use(express.json());

// 🎯 API Routes - Registered Stack Matrix Configuration 
app.use('/api/products', productRoutes); 
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Root baseline route 
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});