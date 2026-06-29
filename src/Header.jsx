// import React, { useState } from "react"; 
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom"; 

// function Header({ cartCount, products = [] }) {
//   const navigate = useNavigate(); 
//   const [showSearch, setShowSearch] = useState(false); 
//   const [searchQuery, setSearchQuery] = useState(""); 

  
//   const handleSearchSubmit = (e) => {
//     if (e.key === "Enter" && searchQuery.trim() !== "") {
//       navigate(`/explore/all?q=${searchQuery.trim().toLowerCase()}`);
//       setSearchQuery("");
//       setShowSearch(false);
//     }
//   };

 
//   const sweetsDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
//     })
//     .slice(0, 4);

//   const dynamicSweetsList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
//     })
  
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

  
//   const savouriesDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("savouries") || cat.includes("snacks");
//     })
//     .slice(0, 4);

//   const dynamicSavouriesList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("savouries") || cat.includes("snacks");
//     })

//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

 
//   const bakeryDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
//     })
//     .slice(0, 4);

//   const dynamicBakeryList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
//     })
    
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });


//   return (
//     <>
//       {/* Top Banner */}
//       <div className="top-bar text-white text-center py-2">
//         We are now shipping PAN INDIA!
//       </div>

//       <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 position-relative">
//         <Link to="/" className="navbar-brand">
//           <img src="/logo.webp" alt="Shree Mithai" />
//         </Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
//           <ul className="navbar-nav fw-semibold gap-4 position-relative">
            
//             {/*  SWEETS DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Sweets
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   {/* Left Side: Dynamic names */}
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">SWEETS</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicSweetsList.length > 0 ? (
//                         dynamicSweetsList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   {/* Right Side: Dynamic image cards */}
//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {sweetsDbImages.length > 0 ? (
//                       sweetsDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Sweets found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/*  SAVOURIES DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Savouries
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   {/* Left Side */}
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">SAVOURIES</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicSavouriesList.length > 0 ? (
//                         dynamicSavouriesList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   {/* Right Side */}
//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {savouriesDbImages.length > 0 ? (
//                       savouriesDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Savouries found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/*  BAKERY DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Bakery
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   {/* Left Side */}
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">BAKERY</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicBakeryList.length > 0 ? (
//                         dynamicBakeryList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   {/* Right Side */}
//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {bakeryDbImages.length > 0 ? (
//                       bakeryDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Bakery found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             <li className="nav-item">
//               <Link to="/collections/hampers" className="nav-link">Hampers</Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Festival & Corporate Orders</a>
//             </li>
//           </ul>
//         </div>

//         {/* Action Panel */}
//         <div className="d-flex gap-3 fs-5 align-items-center position-relative">
          
         
//           {showSearch && (
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               placeholder="Search sweets, savouries..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleSearchSubmit}
//               autoFocus
//               style={{
//                 width: "160px",
//                 borderRadius: "20px",
//                 border: "1px solid #ced4da",
//                 fontSize: "0.85rem",
//                 paddingLeft: "12px"
//               }}
//             />
//           )}

//           {/* <button 
//             onClick={() => setShowSearch(!showSearch)} 
//             className="icon-link text-decoration-none bg-transparent border-0 p-0 fs-5"
//             style={{ cursor: "pointer" }}
//           >
//             🔍
//           </button> */}
          
//           <Link to="/login" className="icon-link text-decoration-none">👤</Link>
//           <Link to="/cart" className="icon-link text-decoration-none position-relative d-inline-block">
//             🛒
//             {cartCount > 0 && (
//               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem', padding: '0.25em 0.45em' }}>
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header; 
// import React, { useState } from "react"; 
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom"; 

// function Header({ cartCount, products = [] }) {
//   const navigate = useNavigate(); 
//   const [showSearch, setShowSearch] = useState(false); 
//   const [searchQuery, setSearchQuery] = useState(""); 

//   const handleSearchSubmit = (e) => {
//     if (e.key === "Enter" && searchQuery.trim() !== "") {
//       navigate(`/explore/all?q=${searchQuery.trim().toLowerCase()}`);
//       setSearchQuery("");
//       setShowSearch(false);
//     }
//   };

//   const sweetsDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
//     })
//     .slice(0, 4);

//   const dynamicSweetsList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
//     })
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

//   const savouriesDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("savouries") || cat.includes("snacks");
//     })
//     .slice(0, 4);

//   const dynamicSavouriesList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("savouries") || cat.includes("snacks");
//     })
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

//   const bakeryDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
//     })
//     .slice(0, 4);

//   const dynamicBakeryList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
//     })
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

//   return (
//     <>
//       {/* Top Banner */}
//       <div className="top-bar text-white text-center py-2">
//         We are now shipping PAN INDIA!
//       </div>

//       <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 position-relative">
//         <Link to="/" className="navbar-brand">
//           <img src="/logo.webp" alt="Shree Mithai" />
//         </Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
//           <ul className="navbar-nav fw-semibold gap-4 position-relative">
            
//             {/* SWEETS DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Sweets
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">SWEETS</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicSweetsList.length > 0 ? (
//                         dynamicSweetsList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {sweetsDbImages.length > 0 ? (
//                       sweetsDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Sweets found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* SAVOURIES DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Savouries
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">SAVOURIES</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicSavouriesList.length > 0 ? (
//                         dynamicSavouriesList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {savouriesDbImages.length > 0 ? (
//                       savouriesDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Savouries found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* BAKERY DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Bakery
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">BAKERY</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicBakeryList.length > 0 ? (
//                         dynamicBakeryList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {bakeryDbImages.length > 0 ? (
//                       bakeryDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Bakery found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* FIXED HAMPERS LINK */}
//             <li className="nav-item">
//               <Link to="/explore/all?q=gift boxes" className="nav-link">Hampers</Link>
//             </li>

//             {/* FIXED FESTIVAL LINK */}
//             <li className="nav-item">
//               <Link to="/explore/all?q=assorted sweets" className="nav-link">Festival & Corporate Orders</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Action Panel */}
//         <div className="d-flex gap-3 fs-5 align-items-center position-relative">
//           {showSearch && (
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               placeholder="Search sweets, savouries..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleSearchSubmit}
//               autoFocus
//               style={{
//                 width: "160px",
//                 borderRadius: "20px",
//                 border: "1px solid #ced4da",
//                 fontSize: "0.85rem",
//                 paddingLeft: "12px"
//               }}
//             />
//           )}
          
//           <Link to="/login" className="icon-link text-decoration-none">👤</Link>
//           <Link to="/cart" className="icon-link text-decoration-none position-relative d-inline-block">
//             🛒
//             {cartCount > 0 && (
//               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem', padding: '0.25em 0.45em' }}>
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;
// import React, { useState } from "react"; 
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom"; 

// function Header({ cartCount, products = [] }) {
//   const navigate = useNavigate(); 
//   const [showSearch = false, setShowSearch] = useState(false); 
//   const [searchQuery, setSearchQuery] = useState(""); 

//   const handleSearchSubmit = (e) => {
//     if (e.key === "Enter" && searchQuery.trim() !== "") {
//       // 🌟 REMOVED '/all' FROM HERE
//       navigate(`/explore?q=${searchQuery.trim().toLowerCase()}`);
//       setSearchQuery("");
//       setShowSearch(false);
//     }
//   };

//   const sweetsDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
//     })
//     .slice(0, 4);

//   const dynamicSweetsList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
//     })
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

//   const savouriesDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("savouries") || cat.includes("snacks");
//     })
//     .slice(0, 4);

//   const dynamicSavouriesList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("savouries") || cat.includes("snacks");
//     })
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

//   const bakeryDbImages = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
//     })
//     .slice(0, 4);

//   const dynamicBakeryList = products
//     .filter(p => {
//       const cat = p.category ? p.category.toLowerCase().trim() : "";
//       return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
//     })
//     .sort((a, b) => {
//       const nameA = a.name ? a.name.toLowerCase() : "";
//       const nameB = b.name ? b.name.toLowerCase() : "";
//       return nameA.localeCompare(nameB);
//     });

//   return (
//     <>
//       {/* Top Banner */}
//       <div className="top-bar text-white text-center py-2">
//         We are now shipping PAN INDIA!
//       </div>

//       <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 position-relative">
//         <Link to="/" className="navbar-brand">
//           <img src="/logo.webp" alt="Shree Mithai" />
//         </Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
//           <ul className="navbar-nav fw-semibold gap-4 position-relative">
            
//             {/* SWEETS DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Sweets
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">SWEETS</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicSweetsList.length > 0 ? (
//                         dynamicSweetsList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {sweetsDbImages.length > 0 ? (
//                       sweetsDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Sweets found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* SAVOURIES DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Savouries
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">SAVOURIES</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicSavouriesList.length > 0 ? (
//                         dynamicSavouriesList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {savouriesDbImages.length > 0 ? (
//                       savouriesDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Savouries found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* BAKERY DROPDOWN */}
//             <li className="nav-item dropdown mega-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                 Bakery
//               </a>
//               <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
//                 <div className="d-flex">
//                   <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
//                     <h6 className="fw-bold">BAKERY</h6>
//                     <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
//                       {dynamicBakeryList.length > 0 ? (
//                         dynamicBakeryList.map((item) => (
//                           <li key={item._id}>
//                             <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
//                               {item.name ? item.name.replaceAll('-', ' ') : ""}
//                             </Link>
//                           </li>
//                         ))
//                       ) : (
//                         <li className="text-muted small">No items</li>
//                       )}
//                     </ul>
//                   </div>

//                   <div className="d-flex gap-2 align-items-start pt-4">
//                     {bakeryDbImages.length > 0 ? (
//                       bakeryDbImages.map((prod) => (
//                         <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
//                           <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
//                           <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
//                             {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
//                           </p>
//                           <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="text-muted small pt-3 ps-2">No Bakery found in DB</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </li>

//             {/* FIXED HAMPERS LINK - UPDATED */}
//             <li className="nav-item">
//               <Link to="/explore?q=gift boxes" className="nav-link">Hampers</Link>
//             </li>

//             {/* FIXED FESTIVAL LINK - UPDATED */}
//             <li className="nav-item">
//               <Link to="/explore?q=assorted sweets" className="nav-link">Festival & Corporate Orders</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Action Panel */}
//         <div className="d-flex gap-3 fs-5 align-items-center position-relative">
//           <span 
//             className="icon-link text-decoration-none" 
//             onClick={() => setShowSearch(!showSearch)} 
//             style={{ cursor: "pointer" }}
//           >
//             🔍
//           </span>
          
//           {showSearch && (
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               placeholder="Search sweets, savouries..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleSearchSubmit}
//               autoFocus
//               style={{
//                 width: "160px",
//                 borderRadius: "20px",
//                 border: "1px solid #ced4da",
//                 fontSize: "0.85rem",
//                 paddingLeft: "12px"
//               }}
//             />
//           )}
          
//           <Link to="/login" className="icon-link text-decoration-none">👤</Link>
//           <Link to="/cart" className="icon-link text-decoration-none position-relative d-inline-block">
//             🛒
//             {cartCount > 0 && (
//               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem', padding: '0.25em 0.45em' }}>
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;
import React, { useState } from "react"; 
import "./Header.css";
import { Link, useNavigate } from "react-router-dom"; 

function Header({ cartCount, products = [] }) {
  const navigate = useNavigate(); 
  const [showSearch, setShowSearch] = useState(false); // 🟢 State syntax breakdown fixed
  const [searchQuery, setSearchQuery] = useState(""); 
  const [suggestions, setSuggestions] = useState([]); // 🟢 Suggestions state tracking array

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/explore?q=${searchQuery.trim().toLowerCase()}`);
      setSearchQuery("");
      setSuggestions([]); // Clear layout suggestion matrix
      setShowSearch(false);
    }
  };

  // 🟢 Handles dynamic dropdown array filtering matching image_cb919d.png logic
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() !== "") {
      const lowerVal = value.toLowerCase().trim();
      // Filter items matching names or categories
      const matched = products.filter(p => {
        const name = p.name ? p.name.toLowerCase() : "";
        const cat = p.category ? p.category.toLowerCase() : "";
        return name.includes(lowerVal) || cat.includes(lowerVal);
      }).slice(0, 6); // Limit suggestion row count context
      
      setSuggestions(matched);
    } else {
      setSuggestions([]);
    }
  };

  const sweetsDbImages = products
    .filter(p => {
      const cat = p.category ? p.category.toLowerCase().trim() : "";
      return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
    })
    .slice(0, 4);

  const dynamicSweetsList = products
    .filter(p => {
      const cat = p.category ? p.category.toLowerCase().trim() : "";
      return cat === "sweets" || cat === "assorted sweets" || cat === "milk sweets" || cat === "ghee sweets" || cat === "cashew sweets";
    })
    .sort((a, b) => {
      const nameA = a.name ? a.name.toLowerCase() : "";
      const nameB = b.name ? b.name.toLowerCase() : "";
      return nameA.localeCompare(nameB);
    });

  const savouriesDbImages = products
    .filter(p => {
      const cat = p.category ? p.category.toLowerCase().trim() : "";
      return cat.includes("savouries") || cat.includes("snacks");
    })
    .slice(0, 4);

  const dynamicSavouriesList = products
    .filter(p => {
      const cat = p.category ? p.category.toLowerCase().trim() : "";
      return cat.includes("savouries") || cat.includes("snacks");
    })
    .sort((a, b) => {
      const nameA = a.name ? a.name.toLowerCase() : "";
      const nameB = b.name ? b.name.toLowerCase() : "";
      return nameA.localeCompare(nameB);
    });

  const bakeryDbImages = products
    .filter(p => {
      const cat = p.category ? p.category.toLowerCase().trim() : "";
      return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
    })
    .slice(0, 4);

  const dynamicBakeryList = products
    .filter(p => {
      const cat = p.category ? p.category.toLowerCase().trim() : "";
      return cat.includes("bakery") || cat.includes("gift boxes") || cat.includes("bakery delights");
    })
    .sort((a, b) => {
      const nameA = a.name ? a.name.toLowerCase() : "";
      const nameB = b.name ? b.name.toLowerCase() : "";
      return nameA.localeCompare(nameB);
    });

  return (
    <>
      <div className="top-bar text-white text-center py-2">
        We are now shipping PAN INDIA!
      </div>

      <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 position-relative">
        <Link to="/" className="navbar-brand">
          <img src="/logo.webp" alt="Shree Mithai" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
          <ul className="navbar-nav fw-semibold gap-4 position-relative">
            
            {/* SWEETS DROPDOWN */}
            <li className="nav-item dropdown mega-dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Sweets
              </a>
              <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
                <div className="d-flex">
                  <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
                    <h6 className="fw-bold">SWEETS</h6>
                    <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
                      {dynamicSweetsList.length > 0 ? (
                        dynamicSweetsList.map((item) => (
                          <li key={item._id}>
                            <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
                              {item.name ? item.name.replaceAll('-', ' ') : ""}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="text-muted small">No items</li>
                      )}
                    </ul>
                  </div>

                  <div className="d-flex gap-2 align-items-start pt-4">
                    {sweetsDbImages.length > 0 ? (
                      sweetsDbImages.map((prod) => (
                        <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
                          <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
                          <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
                            {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
                          </p>
                          <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted small pt-3 ps-2">No Sweets found in DB</p>
                    )}
                  </div>
                </div>
              </div>
            </li>

            {/* SAVOURIES DROPDOWN */}
            <li className="nav-item dropdown mega-dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Savouries
              </a>
              <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
                <div className="d-flex">
                  <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
                    <h6 className="fw-bold">SAVOURIES</h6>
                    <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
                      {dynamicSavouriesList.length > 0 ? (
                        dynamicSavouriesList.map((item) => (
                          <li key={item._id}>
                            <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
                              {item.name ? item.name.replaceAll('-', ' ') : ""}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="text-muted small">No items</li>
                      )}
                    </ul>
                  </div>

                  <div className="d-flex gap-2 align-items-start pt-4">
                    {savouriesDbImages.length > 0 ? (
                      savouriesDbImages.map((prod) => (
                        <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
                          <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
                          <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
                            {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
                          </p>
                          <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted small pt-3 ps-2">No Savouries found in DB</p>
                    )}
                  </div>
                </div>
              </div>
            </li>

            {/* BAKERY DROPDOWN */}
            <li className="nav-item dropdown mega-dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Bakery
              </a>
              <div className="dropdown-menu p-3 mega-menu" style={{ minWidth: "680px" }}>
                <div className="d-flex">
                  <div className="me-4" style={{ width: "220px", maxHeight: "300px", overflowY: "auto" }}>
                    <h6 className="fw-bold">BAKERY</h6>
                    <ul className="list-unstyled mt-2 d-flex flex-column gap-1">
                      {dynamicBakeryList.length > 0 ? (
                        dynamicBakeryList.map((item) => (
                          <li key={item._id}>
                            <Link to={`/product/${item._id}`} className="text-decoration-none text-dark d-block text-truncate" style={{ fontSize: '0.85rem', textTransform: 'capitalize' }}>
                              {item.name ? item.name.replaceAll('-', ' ') : ""}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="text-muted small">No items</li>
                      )}
                    </ul>
                  </div>

                  <div className="d-flex gap-2 align-items-start pt-4">
                    {bakeryDbImages.length > 0 ? (
                      bakeryDbImages.map((prod) => (
                        <Link key={prod._id} to={`/product/${prod._id}`} className="text-decoration-none text-center text-dark" style={{ width: "90px" }}>
                          <img src={prod.imageUrl} alt={prod.name} height="100" width="85" style={{ objectFit: 'cover', borderRadius: '4px' }} />
                          <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.75rem', lineHeight: '1.1', textTransform: 'capitalize' }}>
                            {prod.name ? prod.name.replaceAll('-', ' ').substring(0, 15) : ""}...
                          </p>
                          <small className="text-muted" style={{ fontSize: '0.7rem' }}>Rs. {prod.price}</small>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted small pt-3 ps-2">No Bakery found in DB</p>
                    )}
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/explore?q=gift boxes" className="nav-link">Hampers</Link>
            </li>

            <li className="nav-item">
              <Link to="/explore?q=assorted sweets" className="nav-link">Festival & Corporate Orders</Link>
            </li>
          </ul>
        </div>

        {/* Action Panel */}
        <div className="d-flex gap-3 fs-5 align-items-center position-relative">
          <span 
            className="icon-link text-decoration-none" 
            onClick={() => {
              setShowSearch(!showSearch);
              setSuggestions([]);
            }} 
            style={{ cursor: "pointer" }}
          >
            🔍
          </span>
          
          {showSearch && (
            <div style={{ position: "relative" }}> {/* 🟢 Suggestions boundary block */}
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search sweets, savouries..."
                value={searchQuery}
                onChange={handleInputChange} // 🟢 Dynamic suggestions onChange hook binded
                onKeyDown={handleSearchSubmit}
                autoFocus
                style={{
                  width: "170px",
                  borderRadius: "20px",
                  border: "1px solid #ced4da",
                  fontSize: "0.85rem",
                  paddingLeft: "12px"
                }}
              />

              {/* 🟢 IMAGE_CB919D.PNG STYLE DYNAMIC AUTOCOMPLETE DROPDOWN */}
              {suggestions.length > 0 && (
                <ul className="list-group position-absolute start-0 mt-2 shadow-lg" 
                    style={{ 
                      zIndex: 1000, 
                      width: "260px", 
                      maxHeight: "240px", 
                      overflowY: "auto", 
                      borderRadius: "8px",
                      fontSize: "0.82rem"
                    }}>
                  {suggestions.map((item) => (
                    <li 
                      key={item._id} 
                      className="list-group-item list-group-item-action text-capitalize text-truncate"
                      style={{ cursor: "pointer", padding: "10px 14px" }}
                      onClick={() => {
                        navigate(`/product/${item._id}`); // Target direct item view
                        setSearchQuery("");
                        setSuggestions([]);
                        setShowSearch(false);
                      }}
                    >
                      {item.name ? item.name.replaceAll('-', ' ') : ""}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          
          <Link to="/login" className="icon-link text-decoration-none">👤</Link>
          <Link to="/cart" className="icon-link text-decoration-none position-relative d-inline-block">
            🛒
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem', padding: '0.25em 0.45em' }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;