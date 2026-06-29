
import React, { useState, useEffect, createRef } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";
import "./Cart.css";

const formatPrice = (num) => (num ? num.toLocaleString("en-IN") : "0");

function Cart({ cart, setCart }) {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getUserId = () => {
    try {
      const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
      return user._id;
    } catch (e) { return null; }
  };

  useEffect(() => {
    const fetchCartData = async () => {
      const userId = getUserId();
      if (!userId) return;
      try {
        const response = await axios.get(`http://localhost:5000/api/cart?userId=${userId}`);
        setCart(Array.isArray(response.data) ? response.data : []);
      } catch (err) { console.error("Error loading cart:", err); }
    };
    fetchCartData();
  }, [setCart]);


  const safeCart = Array.isArray(cart) ? cart : [];
  const subtotal = safeCart.reduce((total, item) => total + (item.price * item.quantity || 0), 0);
  const deliveryFee = subtotal >= 500 ? 0 : 50;
  const finalTotal = Math.max(subtotal + deliveryFee - discount, 0);

  const updateQtyInDb = async (productId, currentItem, delta) => {
    const userId = getUserId();
    try {
      const response = await axios.post("http://localhost:5000/api/cart/add", {
        userId, productId, name: currentItem.name, price: currentItem.price,
        imageUrl: currentItem.imageUrl || currentItem.img || "", quantity: delta,
      });
      setCart(Array.isArray(response.data) ? response.data : []);
    } catch (err) { console.error("Update failed:", err); }
  };

  const removeItem = async (productId) => {
    const userId = getUserId();
    try {
      const response = await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, { params: { userId } });
      setCart(Array.isArray(response.data) ? response.data : []);
    } catch (err) { console.error("Remove failed:", err); }
  };

  const applyCoupon = () => {
    if (coupon === "PONGAL") { setDiscount(subtotal * 0.1); setError(""); }
    else if (coupon === "DIWALI") { setDiscount(50); setError(""); }
    else { setDiscount(0); setError("Invalid coupon code"); }
  };

  return (
    <div className="container my-5">
      
     
      <div className="d-flex align-items-center mb-4" style={{ gap: "25px", marginLeft: "-15px" }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
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
            flexShrink: 0 
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
        <h2 className="fw-bold mb-0">Your Cart</h2>
      </div>

      <Row className="g-4">
        <Col xs={12} md={9}>
          <Table bordered responsive className="align-middle bg-white shadow-sm rounded">
            <thead className="text-center bg-light">
              <tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Remove</th></tr>
            </thead>
            <tbody className="text-center">
              {safeCart.length === 0 ? (
                <tr><td colSpan="5" className="py-4 text-muted">No items added to cart</td></tr>
              ) : (
                <TransitionGroup component={null}>
                  {safeCart.map((item) => {
                    const nodeRef = createRef(null);
                    return (
                      <CSSTransition key={item.productId || item._id} nodeRef={nodeRef} timeout={300} classNames="fade">
                        <tr ref={nodeRef}>
                          <td>
                            <div className="d-flex align-items-center text-start">
                              <img src={item.imageUrl || item.img || "/default-product.png"} alt={item.name} className="me-3 rounded" width="50" height="50" style={{ objectFit: "cover" }} />
                              <span className="fw-semibold">{item.name}</span>
                            </div>
                          </td>
                          <td>₹ {formatPrice(item.price)}</td>
                          <td>
                            <Button className="quantity-button" disabled={item.quantity <= 1} onClick={() => updateQtyInDb(item.productId, item, -1)}>−</Button>
                            <span className="mx-2 quantity-number">{item.quantity}</span>
                            <Button className="quantity-button" onClick={() => updateQtyInDb(item.productId, item, 1)}>+</Button>
                          </td>
                          <td>₹ {formatPrice(item.price * item.quantity)}</td>
                          <td>
                            <button type="button" className="btn-remove-icon" onClick={() => removeItem(item.productId)} style={{ background: "none", border: "none", color: "#dc3545" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                            </button>
                          </td>
                        </tr>
                      </CSSTransition>
                    );
                  })}
                </TransitionGroup>
              )}
            </tbody>
          </Table>
        </Col>
        <Col xs={12} md={3}>
          <div className="border p-3 rounded bg-white shadow-sm sticky-top" style={{ top: "20px" }}>
            <h5 className="fw-bold mb-3">Cart Total</h5>
            <input type="text" className="form-control mb-2" placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value.toUpperCase())} disabled={safeCart.length === 0} />
            <Button variant="secondary" className="w-100 mb-2" onClick={applyCoupon} disabled={safeCart.length === 0}>Apply</Button>
            {error && <small className="text-danger d-block mb-2">{error}</small>}
            <div className="d-flex justify-content-between mt-3"><span>Subtotal</span><span className="fw-semibold">₹ {formatPrice(subtotal)}</span></div>
            <div className="d-flex justify-content-between my-2"><span>Delivery Fee</span><span className="fw-semibold">{deliveryFee === 0 ? "FREE" : `₹ ${formatPrice(deliveryFee)}`}</span></div>
            {discount > 0 && (<div className="d-flex justify-content-between text-danger my-2"><span>Discount</span><span>- ₹ {formatPrice(discount)}</span></div>)}
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5 mb-3"><span>Total</span><span style={{ color: "#ff7f00" }}>₹ {formatPrice(finalTotal)}</span></div>
            <Link to="/checkout" state={{ discount, finalTotal, deliveryFee }}>
              <Button className="w-100 fw-bold" disabled={safeCart.length === 0} style={{ backgroundColor: "#ff7f00", borderColor: "#ff7f00" }}>Checkout</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;