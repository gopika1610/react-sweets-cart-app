
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Viewall from "./Viewall";
import ProductDescriptionPage from "./ProductDescriptionPage";
import Explore from "./Explore";
import Hero from "./Hero";
import Journey from "./Journey";
import Categories from "./Categories";
import Infosection from "./Infosection";
import Festivebakes from "./Festivebakes";
import Testimonials from "./Testimonials";
import ScrollToTop from "./ScrollToTop";
import Checkout from "./Checkout";
import ProductList from "./ProductList";

function AppRoutes({ cart, setCart, handleAddToCart, cartCount, products }) {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  };

  const pageTransition = { type: "tween", ease: "easeInOut", duration: 0.3 };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route element={<Layout cartCount={cartCount} setCart={setCart} products={products} />}>
          <Route path="/" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Home /></motion.div>} />
          <Route path="/products" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Products /></motion.div>} />
          <Route path="/viewall" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Viewall /></motion.div>} />
          <Route path="/cart" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Cart cart={cart} setCart={setCart} /></motion.div>} />
          <Route path="/product/:productId" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ProductDescriptionPage handleAddToCart={handleAddToCart} /></motion.div>} />
          
       
          <Route path="/collections/:categoryName" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ProductList products={products} /></motion.div>} />
          
         
         {/* path="/explore" என்பதற்கு பதிலாக path="/explore/*" என்று மாற்றுங்கள் (Wildcard Splat) */}
<Route path="/explore/*" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Explore /></motion.div>} /> {/* <Route path="/explore" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Explore /></motion.div>} /> */}
{/* <Route path="/explore/*" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Explore products={products} /></motion.div>} /> */}
          <Route path="/hero" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Hero /></motion.div>} />
          <Route path="/journey" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Journey /></motion.div>} />
          <Route path="/categories" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Categories /></motion.div>} />
          <Route path="/infosection" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Infosection /></motion.div>} />
          <Route path="/festivebakes" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Festivebakes /></motion.div>} />
          <Route path="/testimonials" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Testimonials /></motion.div>} />
          <Route path="/checkout" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Checkout cart={cart} setCart={setCart} /></motion.div>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const [currentUserId, setCurrentUserId] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser?._id || null;
  });

 
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data); 
      } catch (err) {
        console.error("Error fetching database products:", err);
      }
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const handleAuthChange = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUserId(currentUser?._id || null);
    };
    window.addEventListener("storage_auth_update", handleAuthChange);
    return () => window.removeEventListener("storage_auth_update", handleAuthChange);
  }, []);

  useEffect(() => {
    const initializeCartFromDB = async () => {
      if (!currentUserId) { setCart([]); return; }
      try {
        const response = await axios.get(`http://localhost:5000/api/cart?userId=${currentUserId}`);
        setCart([...response.data]);
      } catch (err) { console.error(err); }
    };
    initializeCartFromDB();
  }, [currentUserId]);

  const handleAddToCart = async (item, quantity = 1) => {
    if (!currentUserId) { alert("⚠️ Please login first!"); return; }
    try {
      const response = await axios.post("http://localhost:5000/api/cart/add", {
        userId: currentUserId,
        productId: item._id || item.id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl || item.img || "/default-product.png",
        quantity: quantity,
      });
      setCart([...response.data]);
    } catch (err) { console.error(err); }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes 
          cart={cart} 
          setCart={setCart} 
          handleAddToCart={handleAddToCart} 
          cartCount={cartCount} 
          products={products} 
        />
      </BrowserRouter>
    </>
  );
}

export default App;