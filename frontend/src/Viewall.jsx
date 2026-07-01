


import React, { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Products.css";

function Viewall() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  const { setCart } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
     
        const response = await axios.get("https://sweet-cart-backend-app.onrender.com/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  const increaseQty = (id) => {
    setQuantity((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decreaseQty = (id) => {
    setQuantity((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));
  };

  const processAddToCart = async (item) => {
    if (isUpdating) return;
    setIsUpdating(true);

    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const userId = user._id;

    if (!userId) {
      alert("Please login to add items to your cart!");
      setIsUpdating(false);
      return;
    }

    const chosenQty = quantity[item._id] || 1;

    try {
      const response = await axios.post("http://localhost:5000/api/cart/add", {
        userId: userId,
        productId: item._id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl || "/default-product.png",
        quantity: chosenQty,
      });

      if (setCart) setCart(response.data);
      alert(`✅ Added ${chosenQty} x ${item.name.replaceAll('-', ' ')} to cart!`);
    } catch (err) {
      console.error("Error updating cart:", err);
      alert("Failed to connect to database.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-dark" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ position: "relative" }}>
      
      {/* ⬇️ EXACT MATCH PIXEL-PERFECT BACK BUTTON ⬇️ */}
      <div style={{ position: "absolute", left: "-25px", top: "5px", zIndex: 10 }}>
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="btn d-flex align-items-center justify-content-center"
          style={{
            width: "44px",
            height: "44px",
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.08)", 
            border: "1px solid rgba(0, 0, 0, 0.03)", 
            transition: "all 0.2s ease-in-out",
            padding: "0"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow = "0px 4px 14px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 3px 10px rgba(0, 0, 0, 0.08)";
          }}
        >
         
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M19 12H5M5 12L12 19M5 12L12 5" 
              stroke="#222222" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <h2 className="text-center fw-bold mb-4 heading">All Products</h2>
      <div className="row">
        {products.map((item) => (
          <div key={item._id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="product-card text-center">
              <Link to={`/product/${item._id}`} className="description">
                <img src={item.imageUrl} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              </Link>
              <h6 className="mt-3 fw-semibold" style={{ textTransform: 'capitalize' }}>
                {item.name.replaceAll('-', ' ')}
              </h6>
              <p className="price">Rs. {item.price}</p>
              <div className="qty-box mt-0">
                <button className="qty-btn" type="button" onClick={() => decreaseQty(item._id)}>-</button>
                <span className="qty-count">{quantity[item._id] || 1}</span>
                <button className="qty-btn" type="button" onClick={() => increaseQty(item._id)}>+</button>
              </div>
              <div className="text-center mt-1">
                <button
                  type="button"
                  className="btn add-cart-btn mt-2"
                  disabled={isUpdating}
                  onClick={(e) => {
                    e.preventDefault();
                    processAddToCart(item);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewall;