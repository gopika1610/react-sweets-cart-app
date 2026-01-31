import "./Viewall.css";
import { useState } from "react";
import products from "./Productsdata";
import { Link } from "react-router-dom";

function Viewall({ handleAddToCart }) {
  const [quantity, setQuantity] = useState({});

  const increaseQty = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1, // start from 1
    }));
  };

  const decreaseQty = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1, // min 1
    }));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 heading">All Products</h2>

      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="product-card text-center">
              <Link to={`/product/${item.id}`} className="description">
                <img src={item.img} alt={item.name} />
              </Link>
              <h6 className="mt-3 fw-semibold">{item.name}</h6>
              <p className="price">Rs. {item.price}</p>

              <div className="qty-box mt-0">
                <button className="qty-btn" onClick={() => decreaseQty(item.id)}>
                  -
                </button>
                <span className="qty-count">{quantity[item.id] || 1}</span>
                <button className="qty-btn" onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>

              <div className="text-center mt-1">
                {/* <button
                  className="btn add-cart-btn mt-2"
                  onClick={() =>
                    handleAddToCart(item, quantity[item.id] || 1)
                  }
                >
                  Add to Cart
                </button> */}
                <button
  type="button"
  className="btn add-cart-btn mt-2"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();

    const qty = quantity[item.id] || 1;
    alert(`${qty} x ${item.name} added to cart!`);
    handleAddToCart(item, qty);
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
