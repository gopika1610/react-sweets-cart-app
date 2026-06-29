
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Layout({ cartCount, setCart, products }) {
  return (
    <>
     
      <Header cartCount={cartCount} products={products} />
      
      <main>

        <Outlet context={{ products, setCart }} /> 
      </main>
      
      <Footer />
    </>
  );
}

export default Layout;