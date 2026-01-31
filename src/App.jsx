import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  // ✅ Initialize cart from localStorage
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // ✅ Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ handleAddToCart: quantity override
  const handleAddToCart = (item, quantity = 1) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);

      if (exists) {
        // Replace old quantity with new quantity
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: quantity } : p
        );
      }

      // New item → add with selected quantity
      return [...prev, { ...item, quantity }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Main layout with Header + Footer */}
          <Route element={<Layout cartCount={cartCount} />}>
            <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
            <Route path="/products" element={<Products handleAddToCart={handleAddToCart} />} />
            <Route path="/viewall" element={<Viewall handleAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route
              path="/product/:productId"
              element={<ProductDescriptionPage handleAddToCart={handleAddToCart} />}
            />
            <Route path="/explore" element={<Explore handleAddToCart={handleAddToCart} />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/infosection" element={<Infosection />} />
            <Route path="/festivebakes" element={<Festivebakes />} />
            <Route path="/testimonials" element={<Testimonials />} />

            {/* 🔥 Checkout: pass cart + setCart */}
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
