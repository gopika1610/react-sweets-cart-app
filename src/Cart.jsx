import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Cart.css";

const formatPrice = (num) => num.toLocaleString("en-IN");

function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  // Quantity handlers
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Cart calculations
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 500 || cart.length === 0 ? 0 : 50;

  const applyCoupon = () => {
    if (coupon === "PONGAL") {
      setDiscount(subtotal * 0.1);
      setError("");
    } else if (coupon === "DIWALI") {
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
        <thead className="text-center">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cart.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-4 text-muted">
                No items added to cart
              </td>
            </tr>
          ) : (
            cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img || "/default-product.png"}
                      alt={item.name}
                      className="me-3"
                      width="50"
                      height="50"
                    />
                    {item.name}
                  </div>
                </td>
                <td>₹ {formatPrice(item.price)}</td>
                <td>
                  <Button
                    className="quantity-button"
                    disabled={item.quantity === 1}
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </Button>
                  <span className="mx-2 quantity-number">{item.quantity}</span>
                  <Button
                    className="quantity-button"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </Button>
                </td>
                <td>₹ {formatPrice(item.price * item.quantity)}</td>
                <td>
                  <Button
                    className="remove-button"
                    variant="danger"
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
            className="w-100 mb-2"
            onClick={applyCoupon}
            disabled={cart.length === 0}
          >
            Apply Coupon
          </Button>

          {error && <small className="text-danger">{error}</small>}

          <div className="d-flex justify-content-between mt-3">
            <span>Subtotal</span>
            <span>₹ {formatPrice(subtotal)}</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? "Free" : `₹ ${formatPrice(deliveryFee)}`}</span>
          </div>

          {discount > 0 && (
            <div className="d-flex justify-content-between text-success">
              <span>Discount</span>
              <span>- ₹ {formatPrice(discount)}</span>
            </div>
          )}

          <hr />

          <div className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>₹ {formatPrice(finalTotal)}</span>
          </div>

          <Link
            to="/checkout"
            state={{ discount, finalTotal, deliveryFee }}
            className="text-decoration-none"
          >
            <Button
              className="w-100 mt-3"
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
