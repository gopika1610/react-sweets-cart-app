import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import products from "./Productsdata.json";
import festiveBakes from "./FestiveBakesProducts";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = ({ handleAddToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const allProducts = useMemo(() => [...products, ...festiveBakes], []);
  const product = allProducts.find(p => p.id === Number(productId));

  if (!product) return <p>Product not found</p>;

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));

  // ✅ Pass quantity to cart
  const addToCart = () => {
    handleAddToCart(product, quantity);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  const orderNow = () => {
    handleAddToCart(product, quantity);
    navigate("/cart"); // go to cart page
  };

  return (
    <div className="product-page">
      <div className="product-main">
        <img
          className="product-img"
          src={product.img || "/default-product.png"}
          alt={product.name}
        />
        <div className="product-details">
          <h1>{product.name}</h1>
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
            <button className="btn-add-cart " onClick={addToCart}>
              Add to Cart
            </button>
            <button className="btn-order-now " onClick={orderNow}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
