
// import React, { useState } from "react";
// import { Link, useOutletContext, useNavigate } from "react-router-dom"; // 👈 Imported useNavigate
// import axios from "axios";
// import "./Explore.css";

// function Explore() {
//   const [qty, setQty] = useState({});
//   const [isUpdating, setIsUpdating] = useState(false);
  
  
//   const { products, setCart } = useOutletContext();
//   const navigate = useNavigate(); 

//   const increase = (id) => setQty((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
//   const decrease = (id) => setQty((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));

//   const addToCartWithMessage = async (item) => {
//     if (isUpdating) return;
//     setIsUpdating(true);
    
  
//     const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
//     if (!user._id) {
//       alert("Please login to add items to your cart!");
//       setIsUpdating(false);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/cart/add", {
//         userId: user._id,
//         productId: item._id,
//         name: item.name,
//         price: item.price,
//         imageUrl: item.imageUrl,
//         quantity: qty[item._id] || 1,
//       });
//       if (setCart) setCart(response.data);
//       alert(`✅ ${item.name} added to cart!`);
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//       alert("Failed to add to cart.");
//     } finally {
//       setIsUpdating(false);
//     }
//   };

 
//   if (!products || products.length === 0) {
//     return <div className="container text-center my-5">Loading Explore Items...</div>;
//   }

  
//   const displayItems = products.filter((item) => item.isExplore === true);

//   return (
//     <div className="container my-5" style={{ position: "relative" }}>
      
//       {/* ⬇️ EXACT MATCH PIXEL-PERFECT BACK BUTTON ⬇️ */}
//       <div style={{ position: "absolute", left: "-25px", top: "5px", zIndex: 10 }}>
//         <button
//           onClick={() => navigate(-1)}
//           type="button"
//           className="btn d-flex align-items-center justify-content-center"
//           style={{
//             width: "44px",
//             height: "44px",
//             backgroundColor: "#ffffff",
//             borderRadius: "50%",
//             boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.08)",
//             border: "1px solid rgba(0, 0, 0, 0.03)", 
//             transition: "all 0.2s ease-in-out",
//             padding: "0"
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.04)";
//             e.currentTarget.style.boxShadow = "0px 4px 14px rgba(0, 0, 0, 0.12)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.boxShadow = "0px 3px 10px rgba(0, 0, 0, 0.08)";
//           }}
//         >
//           {/* Minimalist 90-degree vector arrow matching your reference */}
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path 
//               d="M19 12H5M5 12L12 19M5 12L12 5" 
//               stroke="#222222" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>

//       <h2 className="text-center fw-bold mb-4">Explore Festive Bakes 🎉</h2>
//       <div className="row">
//         {displayItems.length > 0 ? (
//           displayItems.map((item) => (
//             <div className="col-lg-3 col-md-6 mb-4" key={item._id}>
//               <div className="product-card text-center">
//                 <Link to={`/product/${item._id}`}>
//                   <img src={item.imageUrl} alt={item.name} style={{ width: "100%" }} />
//                 </Link>
//                 <h6 className="mt-2 fw-semibold">{item.name}</h6>
//                 <p className="price">Rs. {item.price}</p>
                
//                 <div className="qty-box">
//                   <button className="qty-btn" onClick={() => decrease(item._id)}>-</button>
//                   <span className="qty-count">{qty[item._id] || 1}</span>
//                   <button className="qty-btn" onClick={() => increase(item._id)}>+</button>
//                 </div>
                
//                 <button 
//                   className="btn add-cart-btn mt-2" 
//                   onClick={() => addToCartWithMessage(item)}
//                   disabled={isUpdating}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
         
//           <div className="col-12 text-center my-5">
//             <p className="text-muted fs-5 fw-semibold">No special explore products found at the moment.</p>
//             <Link to="/viewall" className="btn btn-outline-dark mt-2 fw-bold">View All Products</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Explore;
// import React, { useState, useEffect } from "react";
// import { Link, useOutletContext, useNavigate, useSearchParams } from "react-router-dom"; 
// import axios from "axios";
// import "./Explore.css";

// function Explore() {
//   const [qty, setQty] = useState({});
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [filteredProducts, setFilteredProducts] = useState([]); 
  
//   const { products, setCart } = useOutletContext();
//   const navigate = useNavigate(); 
//   const [searchParams] = useSearchParams(); 

//   // Extract 'q' query parameter from URL
//   const searchQuery = searchParams.get("q") || "";

//   // Dynamic Filtering Logic
//   useEffect(() => {
//     if (!products || products.length === 0) return;

//     if (searchQuery.trim() !== "") {
//       const lowerQuery = searchQuery.toLowerCase().trim();
      
//       const filtered = products.filter((item) => {
//         const prodName = item.name ? item.name.toLowerCase() : "";
//         const prodCat = item.category ? item.category.toLowerCase() : "";
        
//         // Accurate match for both direct name values and category groupings
//         return prodName.includes(lowerQuery) || prodCat.includes(lowerQuery);
//       });
      
//       setFilteredProducts(filtered);
//     } else {
//       // Default behavior: Show only items configured with isExplore === true
//       const defaultExplore = products.filter((item) => item.isExplore === true);
//       setFilteredProducts(defaultExplore);
//     }
//   }, [searchQuery, products]);

//   const increase = (id) => setQty((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
//   const decrease = (id) => setQty((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));

//   const addToCartWithMessage = async (item) => {
//     if (isUpdating) return;
//     setIsUpdating(true);
    
//     const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
//     if (!user._id) {
//       alert("Please login to add items to your cart!");
//       setIsUpdating(false);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/cart/add", {
//         userId: user._id,
//         productId: item._id,
//         name: item.name,
//         price: item.price,
//         imageUrl: item.imageUrl,
//         quantity: qty[item._id] || 1,
//       });
//       if (setCart) setCart(response.data);
//       alert(`✅ ${item.name} added to cart!`);
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//       alert("Failed to add to cart.");
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   if (!products || products.length === 0) {
//     return <div className="container text-center my-5">Loading Explore Items...</div>;
//   }

//   // Formatting helper function for dynamic title
//   const getHeadingText = () => {
//     if (!searchQuery) return "Explore Festive Bakes 🎉";
//     // If it's the corporate routing filter request, display a clean customized title
//     if (searchQuery === "assorted sweets") return "Festival & Corporate Orders 🎁";
//     return `${searchQuery.replaceAll('-', ' ')}`;
//   };

//   return (
//     <div className="container my-5" style={{ position: "relative" }}>
      
//       {/* EXACT MATCH PIXEL-PERFECT BACK BUTTON */}
//       <div style={{ position: "absolute", left: "-25px", top: "5px", zIndex: 10 }}>
//         <button
//           onClick={() => navigate(-1)}
//           type="button"
//           className="btn d-flex align-items-center justify-content-center"
//           style={{
//             width: "44px",
//             height: "44px",
//             backgroundColor: "#ffffff",
//             borderRadius: "50%",
//             boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.08)",
//             border: "1px solid rgba(0, 0, 0, 0.03)", 
//             transition: "all 0.2s ease-in-out",
//             padding: "0"
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.04)";
//             e.currentTarget.style.boxShadow = "0px 4px 14px rgba(0, 0, 0, 0.12)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.boxShadow = "0px 3px 10px rgba(0, 0, 0, 0.08)";
//           }}
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path 
//               d="M19 12H5M5 12L12 19M5 12L12 5" 
//               stroke="#222222" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Clean formatted layout title mapping */}
//       <h2 className="text-center fw-bold mb-4 text-capitalize">
//         {getHeadingText()}
//       </h2>

//       <div className="row">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item) => (
//             <div className="col-lg-3 col-md-6 mb-4" key={item._id}>
//               <div className="product-card text-center">
//                 <Link to={`/product/${item._id}`}>
//                   <img src={item.imageUrl} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
//                 </Link>
//                 <h6 className="mt-2 fw-semibold text-capitalize">{item.name.replaceAll('-', ' ')}</h6>
//                 <p className="price">Rs. {item.price}</p>
                
//                 <div className="qty-box">
//                   <button className="qty-btn" onClick={() => decrease(item._id)}>-</button>
//                   <span className="qty-count">{qty[item._id] || 1}</span>
//                   <button className="qty-btn" onClick={() => increase(item._id)}>+</button>
//                 </div>
                
//                 <button 
//                   className="btn add-cart-btn mt-2" 
//                   onClick={() => addToCartWithMessage(item)}
//                   disabled={isUpdating}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-12 text-center my-5">
//             <p className="text-muted fs-5 fw-semibold">No products found matching your filter criteria.</p>
//             <Link to="/viewall" className="btn btn-outline-dark mt-2 fw-bold">View All Products</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Explore;
import React, { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate, useSearchParams } from "react-router-dom"; 
import axios from "axios";
import "./Explore.css";

function Explore() {
  const [qty, setQty] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  
  const { products, setCart } = useOutletContext();
  const navigate = useNavigate(); 
  const [searchParams] = useSearchParams(); 

  // Extract 'q' query parameter from URL
  const searchQuery = searchParams.get("q") || "";

  // 🌟 Dynamic Filtering Logic for "isExplore sweets"
  useEffect(() => {
    if (!products || products.length === 0) return;

    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase().trim();
      
      // 'assorted sweets' (Festival & Corporate link) வழியா வரும்போது மட்டும்
      if (lowerQuery === "assorted sweets") {
        const exploreSweetsOnly = products.filter((item) => {
          const cat = item.category ? item.category.toLowerCase().trim() : "";
          
          // Condition: Explore-ல் உண்மையாக இருக்க வேண்டும் + ஏதேனும் ஸ்வீட்ஸ் கேட்டகிரி ஆக இருக்க வேண்டும்!
          return (
            item.isExplore === true && 
            (cat === "sweets" || 
             cat === "assorted sweets" || 
             cat === "milk sweets" || 
             cat === "ghee sweets" || 
             cat === "cashew sweets")
          );
        });
        
        setFilteredProducts(exploreSweetsOnly);
      } else {
        // சாதாரண சர்ச் பார் தேடல்களுக்கு (Normal Search Workflow)
        const filtered = products.filter((item) => {
          const prodName = item.name ? item.name.toLowerCase() : "";
          const prodCat = item.category ? item.category.toLowerCase() : "";
          
          return prodName.includes(lowerQuery) || prodCat.includes(lowerQuery);
        });
        
        setFilteredProducts(filtered);
      }
    } else {
      // Default behavior: URL-ல் எந்த குவரியும் இல்லைனா, எக்ஸ்ப்ளோர்ல இருக்குற எல்லாரையும் காட்டும்
      const defaultExplore = products.filter((item) => item.isExplore === true);
      setFilteredProducts(defaultExplore);
    }
  }, [searchQuery, products]);

  const increase = (id) => setQty((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  const decrease = (id) => setQty((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));

  const addToCartWithMessage = async (item) => {
    if (isUpdating) return;
    setIsUpdating(true);
    
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!user._id) {
      alert("Please login to add items to your cart!");
      setIsUpdating(false);
      return;
    }

    try {
      const response = await axios.post("https://sweet-cart-backend-app.onrender.com/api/cart/add", {
        userId: user._id,
        productId: item._id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: qty[item._id] || 1,
      });
      if (setCart) setCart(response.data);
      alert(`✅ ${item.name} added to cart!`);
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (!products || products.length === 0) {
    return <div className="container text-center my-5">Loading Explore Items...</div>;
  }

  // Formatting helper function for dynamic title
  const getHeadingText = () => {
    if (!searchQuery) return "Explore Festive Bakes 🎉";
    if (searchQuery === "assorted sweets") return "Festival & Corporate Orders";
    return `${searchQuery.replaceAll('-', ' ')}`;
  };

  return (
    <div className="container my-5" style={{ position: "relative" }}>
      
      {/* EXACT MATCH PIXEL-PERFECT BACK BUTTON */}
      <div style={{ position: "absolute", left: "-25px", top: "5px", zIndex: 10 }}>
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="btn d-flex align-items-center justify-content-center"
          style={{
            width: "44px",
            height: "44px",
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(0, 0, 0, 0.03)", 
            transition: "all 0.2s ease-in-out",
            padding: "0"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow = "0px 4px 14px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 3px 10px rgba(0, 0, 0, 0.08)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M19 12H5M5 12L12 19M5 12L12 5" 
              stroke="#222222" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Clean formatted layout title mapping */}
      <h2 className="text-center fw-bold mb-4 text-capitalize">
        {getHeadingText()}
      </h2>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-lg-3 col-md-6 mb-4" key={item._id}>
              <div className="product-card text-center">
                <Link to={`/product/${item._id}`}>
                  <img src={item.imageUrl} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
                </Link>
                <h6 className="mt-2 fw-semibold text-capitalize">{item.name.replaceAll('-', ' ')}</h6>
                <p className="price">Rs. {item.price}</p>
                
                <div className="qty-box">
                  <button className="qty-btn" onClick={() => decrease(item._id)}>-</button>
                  <span className="qty-count">{qty[item._id] || 1}</span>
                  <button className="qty-btn" onClick={() => increase(item._id)}>+</button>
                </div>
                
                <button 
                  className="btn add-cart-btn mt-2" 
                  onClick={() => addToCartWithMessage(item)}
                  disabled={isUpdating}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center my-5">
            <p className="text-muted fs-5 fw-semibold">No products found matching your filter criteria.</p>
            <Link to="/viewall" className="btn btn-outline-dark mt-2 fw-bold">View All Products</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;