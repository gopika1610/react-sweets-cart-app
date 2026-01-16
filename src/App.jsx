import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Home from "./Home";
import Products from "./Products";
import Journey from "./Journey";
import Categories from "./Categories";
import Infosection from "./Infosection";
import Festivebakes from "./Festivebakes";
import Testimonials from "./Testimonials";
import Login from "./Login";
import Cart from "./Cart";
import Register from "./Register";
import Viewall from "./Viewall";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Explore from "./Explore";



function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item, qty = 1) => {
    if (qty <= 0) return;

    setCart(prev => {
      const exists = prev.find((p )=> p.id === item.id);

      if (exists) {
        return prev.map((p )=>
          p.id === item.id
            ? { ...p, quantity: p.quantity ||1 + qty }
            : p
        );
      }

      return [...prev, { ...item, quantity:qty}];
    });
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />}/>
        <Route path="/products" element={<Products handleAddToCart={handleAddToCart} />}/>
        <Route path="/viewall" element={<Viewall handleAddToCart={handleAddToCart} />}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="hero" element={<Hero/>}/>
        <Route path="/journey" element={<Journey />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/infosection" element={<Infosection />} />
        <Route path="/festivebakes" element={<Festivebakes />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore handleAddToCart={handleAddToCart}/>}/>
      
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;