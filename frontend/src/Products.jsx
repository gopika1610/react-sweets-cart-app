
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const response = await axios.get("https://sweet-cart-backend-app.onrender.com/api/products");
        if (response.data && Array.isArray(response.data)) {
     
          setProducts(response.data.slice(0, 8));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching home products:", error);
        setLoading(false);
      }
    };
    fetchHomeProducts();
  }, []);

  if (loading) return <div className="text-center my-5 fw-bold">Loading Best Sellers...</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Best Sellers!</h2>
      <div className="row">
        {products.map((item) => (
          <div key={item._id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="product-card text-center">
              <Link to={`/product/${item._id}`}>
                <img src={item.imageUrl} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              </Link>
              <h6 className="mt-3 fw-semibold" style={{ textTransform: "capitalize" }}>
                {item.name.replaceAll('-', ' ')}
              </h6>
              <p>Rs. {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/viewall" className="btn btn-outline-dark fw-bold px-4">VIEW ALL</Link>
      </div>
    </div>
  );
}

export default Products;