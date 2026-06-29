
import React, { useState } from "react";
import { useParams, Link, useOutletContext, useNavigate, useLocation } from "react-router-dom"; // 🌟 useLocation சேர்க்கப்பட்டுள்ளது
import axios from "axios";
import "./Explore.css"; 

function ProductList() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  const [qty, setQty] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  

  const { products, setCart } = useOutletContext();

  const increase = (id) => setQty((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  const decrease = (id) => setQty((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));

 
  const addToCartWithMessage = async (item) => {
    if (isUpdating) return;
    setIsUpdating(true);
    
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!user._id) {
      alert("Please login to add items to your cart!");
      setIsUpdating(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/cart/add", {
        userId: user._id,
        productId: item._id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: qty[item._id] || 1,
      });
      if (setCart) setCart(response.data);
      alert(`✅ ${item.name} added to cart!`);
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart.");
    } finally {
      setIsUpdating(false);
    }
  };


  if (!products || products.length === 0) {
    return (
      <div className="container text-center my-5" style={{ minHeight: "50vh", paddingTop: "15%" }}>
        <div className="spinner-border text-dark" role="status"></div>
        <p className="mt-2 fw-semibold">Loading Products...</p>
      </div>
    );
  }


  const queryParams = new URLSearchParams(location.search);
  const searchWord = queryParams.get("q")?.toLowerCase().trim() || "";


  const filteredProducts = products.filter(item => {
    
    if (searchWord) {
      const productName = item.name?.toLowerCase() || "";
      return productName.includes(searchWord);
    }


    const dbCategory = item.category?.toLowerCase().trim() || "";
    const urlCategory = categoryName?.toLowerCase().trim() || "";
    return dbCategory === urlCategory || dbCategory.replaceAll(' ', '-') === urlCategory;
  });

  return (
    <div className="container my-5">
      

      <div className="position-relative d-flex align-items-center justify-content-center mb-5">
        
 
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            position: 'absolute',
            left: '-15px', 
            background: '#ffffff', 
            border: '1px solid #e0e0e0', 
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem', 
            cursor: 'pointer',
            color: '#333',
            boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.08)';
          }}
        >
          🡨
        </button>


        <h2 className="fw-bold mb-0 text-capitalize text-center" style={{ color: "#4a2c11" }}>
          {searchWord ? `Search Results: ${searchWord}` : (categoryName ? categoryName.replaceAll("-", " ") : "")}
        </h2>
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-lg-3 col-md-6 mb-4" key={item._id}>
              <div className="product-card text-center">
                <Link to={`/product/${item._id}`}>
                  <img 
                    src={item.imageUrl || "/default-product.png"} 
                    alt={item.name} 
                    style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
                  />
                </Link>
                <h6 className="mt-2 fw-semibold">{item.name}</h6>
                <p className="price">Rs. {item.price}</p>
                
                <div className="qty-box">
                  <button className="qty-btn" onClick={() => decrease(item._id)}>-</button>
                  <span className="qty-count">{qty[item._id] || 1}</span>
                  <button className="qty-btn" onClick={() => increase(item._id)}>+</button>
                </div>
                
                <button 
                  className="btn add-cart-btn mt-2" 
                  onClick={() => addToCartWithMessage(item)}
                  disabled={isUpdating}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center my-5">
            <p className="text-muted fs-5">No products found matching your search.</p>
            <Link to="/viewall" className="btn btn-dark mt-2">Go to All Products</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;


