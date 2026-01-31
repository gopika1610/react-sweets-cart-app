import { useState } from "react";


import { Link } from "react-router-dom";
import festiveBakes from "./FestiveBakesProducts";
import "./Explore.css";

function Explore({ handleAddToCart }) {
  const [qty, setQty] = useState({});

  const increase = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrease = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const addToCartWithMessage = (item) => {
    const quantity = qty[item.id] || 1;
     alert(`${quantity} x ${item.name} added to cart!`);
    handleAddToCart(item, quantity);
   
  };
 

  

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">
        Explore Festive Bakes 🎉
      </h2>

      <div className="row">
        {festiveBakes.map((item) => (
          <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
            <div className="product-card text-center">

              <Link to={`/product/${item.id}`}>
                <img src={item.img} alt={item.name} />
              </Link>

              <h6 className="mt-2">{item.name}</h6>
              <p className="price">Rs. {item.price}</p>

              <div className="qty-box">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{qty[item.id] || 1}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>

              <button type="button"
                className="add-cart-btn mt-2"
                onClick={() => addToCartWithMessage(item)}
                
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

export default Explore;
