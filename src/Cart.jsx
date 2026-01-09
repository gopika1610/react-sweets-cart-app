import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./Cart.css";


const formatPrice = (num) => num.toLocaleString("en-IN");

function Cart() {

  const [cart, setCart] = useState([]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

 
  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };


  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const deliveryFee = subtotal > 500 || cart.length === 0 ? 0 : 50;

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(subtotal * 0.1);
      setError("");
    } else if (coupon === "FLAT50") {
      setDiscount(50);
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid coupon code");
    }
  };

  const finalTotal = Math.max(subtotal + deliveryFee - discount, 0);

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>

     
      <Table bordered responsive className="align-middle">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-muted">
                No items added to cart
              </td>
            </tr>
          ) : (
            cart.map(item => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      width="60"
                      className="me-3"
                    />
                    {item.name}
                  </div>
                </td>

                <td>₹ {formatPrice(item.price)}</td>

                <td>
                  <Button
                    size="sm"
                    disabled={item.qty === 1}
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.qty}</span>
                  <Button size="sm" onClick={() => increaseQty(item.id)}>
                    +
                  </Button>
                </td>

                <td>₹ {formatPrice(item.price * item.qty)}</td>

                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

     
      <div className="mt-4" style={{ maxWidth: "360px" }}>
        <div className="border p-3 rounded">
          <h5 className="fw-bold mb-3">Cart Total</h5>

      
          <div className="mb-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value.toUpperCase())}
              disabled={cart.length === 0}
            />

            <Button
              variant="secondary"
              size="sm"
              className="w-100"
              onClick={applyCoupon}
              disabled={cart.length === 0}
            >
              Apply Coupon
            </Button>

            {error && <small className="text-danger">{error}</small>}
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>₹ {formatPrice(subtotal)}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? "Free" : `₹ ${formatPrice(deliveryFee)}`}</span>
          </div>

          {discount > 0 && (
            <div className="d-flex justify-content-between mb-2 text-success">
              <span>Discount</span>
              <span>- ₹ {formatPrice(discount)}</span>
            </div>
          )}

          <hr />

          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Total</span>
            <span>₹ {formatPrice(finalTotal)}</span>
          </div>

          <Button className="w-100" disabled={cart.length === 0}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
