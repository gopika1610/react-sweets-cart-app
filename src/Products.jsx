// import { Link } from "react-router-dom";
// import "./Products.css";
// import products from "./Productsdata.json";

// function Products({ handleAddToCart }) {
//   return (
    
//     <div className="container my-5">
//       <h2 className="text-center fw-bold mb-4 heading">Best Sellers!</h2>

//       <div className="row">
//         {products.slice(0, 8).map((item) => (
//           <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            

//             <div className="product-card text-center">
//               <Link to={`/product/${item.id}`} className="description">
//               <img src={item.img} alt={item.name} />
//               </Link>
//               <h6 className="mt-3 fw-semibold">{item.name}</h6>
//               <p className="price">Rs. {item.price}</p>
//             </div>
            
           
//             <div className="text-center mt-2">
//              <button
//   className="btn add-cart-btn mt-4 view-all-btn"
//   onClick={() => {
//     handleAddToCart(item, 1);
//     alert("✅ Product added to cart successfully!");
//   }}
// >
//   Add to Cart
// </button>

//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-">
//         <Link to="/viewall">
//           <button className="btn btn-outline-dark px-5 py-2 view-all-btn">
//             VIEW ALL
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Products;



import { Link } from "react-router-dom";
import "./Products.css";
import products from "./Productsdata.json";

function Products({ handleAddToCart }) {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 heading">Best Sellers!</h2>

      <div className="row">
        {products.slice(0, 8).map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            
            <div className="product-card text-center">
              <Link to={`/product/${item.id}`} className="description">
                <img src={item.img} alt={item.name} />
              </Link>
              <h6 className="mt-3 fw-semibold">{item.name}</h6>
              <p className="price">Rs. {item.price}</p>
              
              {/* Moved inside the product-card wrapper */}
              <div className="text-center mt-2">
                <button
                  className="btn add-cart-btn mt-2 view-all-btn"
                  onClick={() => {
                    handleAddToCart(item, 1);
                    alert("✅ Product added to cart successfully!");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/viewall">
          <button className="btn btn-outline-dark px-5 py-2 view-all-btn">
            VIEW ALL
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Products;