
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = ({ handleAddToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchAndFilterProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/products");
        
        // 🔎 URL ஐடிக்கு மேட்ச் ஆகுற ப்ராடக்ட்டை மட்டும் ஃபிரண்ட்-எண்ட்ல பிரிக்கிறோம்!
        const matchingProduct = response.data.find(item => item._id === productId);
        
        setProduct(matchingProduct || null);
        setLoading(false);
      } catch (error) {
        console.error("Error retrieving detailed item structure specs from server:", error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchAndFilterProduct();
    }
  }, [productId]); 

  if (loading) {
    return (
      <div className="container text-center my-5" style={{ minHeight: "50vh", paddingTop: "10%" }}>
        <div className="spinner-border text-dark" role="status"></div>
        <p className="mt-2 fw-semibold">Loading sweet specifications...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center my-5">
        <p className="text-danger fw-bold fs-4">❌ Product not found</p>
        <button className="btn btn-dark mt-2" onClick={() => navigate("/")}>
          Back to Sweets Shop
        </button>
      </div>
    );
  }

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));

  const addToCart = () => {
    handleAddToCart(product, quantity);
    alert(`✅ ${quantity} x ${product.name.replaceAll('-', ' ')} added to cart!`);
  };

  const orderNow = () => {
    handleAddToCart(product, quantity);
    navigate("/cart"); 
  };

  return (
    <div className="product-page">
      <div className="product-main" style={{ position: "relative" }}>
        
       
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            position: 'absolute', 
            top: '25px',       
            left: '-70px', 
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
            transition: 'all 0.2s ease'
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

        <img
          className="product-img"
          src={product.imageUrl || product.img || "/default-product.png"}
          alt={product.name}
        />
        <div className="product-details">
          <h1 style={{ textTransform: 'capitalize' }}>
            {product.name.replaceAll('-', ' ')}
          </h1>
          <p className="price">₹{product.price * quantity}</p>

          <div className="quantity-selector">
            <button onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          <p className="description">
            {product.description ||
              "Delicious sweet made from premium ingredients. Perfect for festivals and gifts!"}
          </p>

          <div className="product-actions">
            <button className="btn-add-cart" onClick={addToCart}>
              Add to Cart
            </button>
            <button className="btn-order-now" onClick={orderNow}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;