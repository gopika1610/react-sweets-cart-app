import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
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

function AppRoutes({ cart, setCart, handleAddToCart, cartCount }) {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Layout routes */}
        <Route element={<Layout cartCount={cartCount} />}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home handleAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
          <Route
            path="/products"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Products handleAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
          <Route
            path="/viewall"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Viewall handleAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
          <Route
            path="/cart"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Cart cart={cart} setCart={setCart} />
              </motion.div>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ProductDescriptionPage handleAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
          <Route
            path="/explore"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Explore handleAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
          <Route
            path="/hero"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Hero />
              </motion.div>
            }
          />
          <Route
            path="/journey"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Journey />
              </motion.div>
            }
          />
          <Route
            path="/categories"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Categories />
              </motion.div>
            }
          />
          <Route
            path="/infosection"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Infosection />
              </motion.div>
            }
          />
          <Route
            path="/festivebakes"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Festivebakes />
              </motion.div>
            }
          />
          <Route
            path="/testimonials"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Testimonials />
              </motion.div>
            }
          />
          <Route
            path="/checkout"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Checkout cart={cart} setCart={setCart} />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item, quantity = 1) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: quantity } : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
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
        />
      </BrowserRouter>
    </>
  );
}

export default App;
