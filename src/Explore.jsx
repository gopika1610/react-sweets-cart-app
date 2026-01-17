   import { useState } from "react";
import festiveBakes from "./FestiveBakesProducts";
import "./Explore.css";


function Explore({ handleAddToCart }) {
  const [qty, setQty] = useState({});

  const increase = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" >
        Explore Festive Bakes 🎉
      </h2>

      <div className="row">
        {festiveBakes.map((item) => (
          <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
            <div className="product-card">
              <img src={item.img} alt={item.name} />

              <h6>{item.name}</h6>
              <span className="price">Rs. {item.price}</span>

           
              <div className="qty-box">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{qty[item.id] || 0}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
  </div>
              <button
                className="add-cart-btn mt-4 "
                onClick={() =>
                  handleAddToCart(item, qty[item.id] || 1)
                }
              >
                Add to Cart
              </button>
            </div>
        
        ))}
      </div>
    </div>
  );
}

export default Explore;
