
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"; // Ensure you have this installed
import "./Checkout.css";

const formatPrice = (num) => num.toLocaleString("en-IN");

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();
  const location = useLocation();

  const discount = location.state?.discount || 0;
  const deliveryFee = location.state?.deliveryFee || 0;
  const finalTotal = location.state?.finalTotal || 0;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    if (e) e.preventDefault();


    if (!cart || cart.length === 0) {
      toast.error("🛒 Your cart is empty");
      return;
    }
    const { name, phone, address, city, pincode } = formData;
    if (!name || !phone || !address || !city || !pincode) {
      toast.error("⚠️ All fields are required");
      return;
    }

  
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const orderData = {
      userId: user._id, 
      items: cart,
      subtotal,
      discount,
      deliveryFee,
      total: finalTotal,
      deliveryDetails: formData,
    };

   
    try {
      const response = await axios.post("https://sweet-cart-backend-app.onrender.com/api/orders/place", orderData);

      if (response.status === 201) {
        setCart([]); 
        localStorage.removeItem("cart"); 
        toast.success("🎉 Order placed successfully!");
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      console.error("Order Error:", err);
      toast.error("❌ Failed to place order. Please try again.");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Your cart is empty 😕</h2>
        <button className="go-shopping-btn" onClick={() => navigate("/")}>Go Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-main">
        {/* Left Side: Delivery Form */}
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h4>Delivery Details</h4>
          
          <div className="form-group-block">
            <label className="input-label">FULL NAME</label>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group-block">
            <label className="input-label">PHONE NUMBER</label>
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group-block">
            <label className="input-label">DELIVERY ADDRESS</label>
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="inline-fields-row">
            <div className="form-group-block flex-field">
              <label className="input-label">CITY</label>
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            </div>
            
            <div className="form-group-block flex-field">
              <label className="input-label">PINCODE</label>
              <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required />
            </div>
          </div>
        </form>

        {/* Right Side: Summary Card */}
        <div className="checkout-summary">
          <h4>Order Summary</h4>
          <div className="checkout-items-scroll">
            {cart.map((item) => (
              <div className="summary-item" key={item.productId}>
                <span>{item.name} × {item.quantity}</span>
                <span>₹ {formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <hr />
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹ {formatPrice(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{deliveryFee === 0 ? "Free" : `₹ ${formatPrice(deliveryFee)}`}</span>
          </div>
          {discount > 0 && (
            <div className="summary-row text-success">
              <span>Discount</span>
              <span>- ₹ {formatPrice(discount)}</span>
            </div>
          )}
          <div className="summary-row total">
            <span>Total</span>
            <span className="orange-total">₹ {formatPrice(finalTotal)}</span>
          </div>

          <button type="button" className="place-order-btn-final" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;