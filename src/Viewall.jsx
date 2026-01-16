import "./Viewall.css";
import { useState } from "react";
import products from "./Productsdata";


function Viewall({ handleAddToCart }) {
  const [quantity, setQuantity] = useState({});


  const increaseQty = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 heading">All Products</h2>

      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="product-card text-center">
              <img src={item.img} alt={item.name} />
              <h6 className="mt-3 fw-semibold">{item.name}</h6>
              <p className="price">Rs. {item.price}</p>

              <div className="qty-box mt-2">
                <button className="qty-btn" onClick={() => decreaseQty(item.id)}>
                  -
                </button>
                <span className="qty-count">{quantity[item.id] || 0}</span>
                <button className="qty-btn" onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>
            </div>

            <div className="text-center mt-2">
              <button
                className="btn add-cart-btn mt-2"
                onClick={() => handleAddToCart(item, quantity[item.id] || 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewall;
