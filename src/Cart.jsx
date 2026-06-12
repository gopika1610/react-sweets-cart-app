// import React, { useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./Cart.css";

// const formatPrice = (num) => num.toLocaleString("en-IN");

// function Cart({ cart, setCart }) {
//   const [updatedId, setUpdatedId] = useState(null);
//   const navigate = useNavigate();
//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [error, setError] = useState("");


//   const increaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };
//   const decreaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };
//   const removeItem = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };


//   const subtotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const deliveryFee = subtotal > 500 || cart.length === 0 ? 0 : 50;

//   const applyCoupon = () => {
//     if (coupon === "PONGAL") {
//       setDiscount(subtotal * 0.1);
//       setError("");
//     } else if (coupon === "DIWALI") {
//       setDiscount(50);
//       setError("");
//     } else {
//       setDiscount(0);
//       setError("Invalid coupon code");
//     }
//   };

//   const finalTotal = Math.max(subtotal + deliveryFee - discount, 0);

//   return (
//     <div className="container my-5">
//       <h2 className="fw-bold mb-4">Your Cart</h2>

//       <Table bordered responsive className="align-middle">
//         <thead className="text-center">
//           <tr>
//             <th>Item</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//             <th>Remove</th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           {cart.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="py-4 text-muted">
//                 No items added to cart
//               </td>
//             </tr>
//           ) : (
//             <TransitionGroup component={null}>
//               {cart.map((item) => (
//                 <CSSTransition key={item.id} timeout={300} classNames="fade">
//                   <tr>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <img
//                           src={item.img || "/default-product.png"}
//                           alt={item.name}
//                           className="me-3"
//                           width="50"
//                           height="50"
//                         />
//                         {item.name}
//                       </div>
//                     </td>
//                     <td>₹ {formatPrice(item.price)}</td>
//                     <td>
//                       <Button
//                         className="quantity-button"
//                         disabled={item.quantity === 1}
//                         onClick={() => decreaseQty(item.id)}
//                       >
//                         −
//                       </Button>
//                       <span className="mx-2 quantity-number">{item.quantity}</span>
//                       <Button
//                         className="quantity-button"
//                         onClick={() => increaseQty(item.id)}
//                       >
//                         +
//                       </Button>
//                     </td>
//                     <td>₹ {formatPrice(item.price * item.quantity)}</td>
//                     <td>
//                       <Button
//                         className="remove-button"
//                         variant="danger"
//                         onClick={() => removeItem(item.id)}
//                       >
//                         ×
//                       </Button>
//                     </td>
//                   </tr>
//                 </CSSTransition>
//               ))}
//             </TransitionGroup>
//           )}
//         </tbody>
//       </Table>

//       {/* Cart total + coupon part remains same */}
//       <div className="mt-4" style={{ maxWidth: "360px" }}>
//         <div className="border p-3 rounded">
//           <h5 className="fw-bold mb-3">Cart Total</h5>

//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Enter coupon code"
//             value={coupon}
//             onChange={(e) => setCoupon(e.target.value.toUpperCase())}
//             disabled={cart.length === 0}
//           />

//           <Button
//             variant="secondary"
//             size="sm"
//             className="w-100 mb-2"
//             onClick={applyCoupon}
//             disabled={cart.length === 0}
//           >
//             Apply Coupon
//           </Button>

//           {error && <small className="text-danger">{error}</small>}

//           <div className="d-flex justify-content-between mt-3">
//             <span>Subtotal</span>
//             <span>₹ {formatPrice(subtotal)}</span>
//           </div>

//           <div className="d-flex justify-content-between">
//             <span>Delivery Fee</span>
//             <span>{deliveryFee === 0 ? "Free" : `₹ ${formatPrice(deliveryFee)}`}</span>
//           </div>

//           {discount > 0 && (
//             <div className="d-flex justify-content-between text-success">
//               <span>Discount</span>
//               <span>- ₹ {formatPrice(discount)}</span>
//             </div>
//           )}

//           <hr />

//           <div className="d-flex justify-content-between fw-bold">
//             <span>Total</span>
//             <span>₹ {formatPrice(finalTotal)}</span>
//           </div>

//           <Link
//             to="/checkout"
//             state={{ discount, finalTotal, deliveryFee }}
//             className="text-decoration-none"
//           >
//             <Button
//               className="w-100 mt-3"
//               disabled={cart.length === 0}
//             >
//               Proceed to Checkout
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;
import React, { useState } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Cart.css";

const formatPrice = (num) => num.toLocaleString("en-IN");

function Cart({ cart, setCart }) {
  const [updatedId, setUpdatedId] = useState(null);
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

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

      {/* Upgraded to Bootstrap Row/Col layout to arrange items side-by-side on desktop */}
      <Row className="g-4">
        
        {/* Left Side: Product Items Table (~75% Width on Desktop) */}
        <Col xs={12} md={9}>
          <Table bordered responsive className="align-middle bg-white shadow-sm rounded">
            <thead className="text-center bg-light">
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
                <TransitionGroup component={null}>
                  {cart.map((item) => (
                    <CSSTransition key={item.id} timeout={300} classNames="fade">
                      <tr>
                        <td>
                          <div className="d-flex align-items-center text-start">
                            <img
                              src={item.img || "/default-product.png"}
                              alt={item.name}
                              className="me-3 rounded"
                              width="50"
                              height="50"
                              style={{ objectFit: "cover" }}
                            />
                            <span className="fw-semibold">{item.name}</span>
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
                          {/* Polished: Substituted literal 'x' text for a crisp, interactive trash icon */}
                          <button
                            className="btn-remove-icon"
                            onClick={() => removeItem(item.id)}
                            title="Remove item"
                            style={{
                              background: "none",
                              border: "none",
                              padding: "6px",
                              cursor: "pointer",
                              transition: "color 0.2s ease"
                            }}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="18" 
                              height="18" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              )}
            </tbody>
          </Table>
        </Col>

        {/* Right Side: Cart Summary Breakdown Card (~25% Width on Desktop) */}
        <Col xs={12} md={3}>
          <div className="border p-3 rounded bg-white shadow-sm sticky-top" style={{ top: "20px" }}>
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

            {error && <small className="text-danger d-block mb-2">{error}</small>}

            <div className="d-flex justify-content-between mt-3">
              <span className="text-muted">Subtotal</span>
              <span className="fw-semibold">₹ {formatPrice(subtotal)}</span>
            </div>

            <div className="d-flex justify-content-between my-2">
              <span className="text-muted">Delivery Fee</span>
              <span className="fw-semibold">
                {deliveryFee === 0 ? "Free" : `₹ ${formatPrice(deliveryFee)}`}
              </span>
            </div>

            {discount > 0 && (
              <div className="d-flex justify-content-between text-success my-2">
                <span>Discount</span>
                <span>- ₹ {formatPrice(discount)}</span>
              </div>
            )}

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
              <span>Total</span>
              <span style={{ color: "#ff7f00" }}>₹ {formatPrice(finalTotal)}</span>
            </div>

            <Link
              to="/checkout"
              state={{ discount, finalTotal, deliveryFee }}
              className="text-decoration-none"
            >
              <Button
                className="w-100 fw-bold"
                disabled={cart.length === 0}
                style={{ backgroundColor: "#ff7f00", borderColor: "#ff7f00" }} // Using the main primary brand orange action color here
              >
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </Col>
        
      </Row>
    </div>
  );
}

export default Cart;