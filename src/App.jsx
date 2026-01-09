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
import ProductList from "./data/ProductList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     
      <Header />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/infosection" element={<Infosection />} />
        <Route path="/festivebakes" element={<Festivebakes />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/viewall" element={<Viewall/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
      
        
     
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
