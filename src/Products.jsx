
import { Link } from "react-router-dom";
import "./Products.css";


const products = [
  {
    name: "Kaju Katli",
    price: "from Rs. 295.00",
    img: "/kajukatli.webp",
    
  },
  {
    name: "Masala Cashew",
    price: "from Rs. 156.60",
    img: "/masala-cashew.webp",
  },
  {
    name: "kulabjamun",
    price: "from Rs. 408.00",
    img: "/kulabjamun.webp",
  },
  {
    name: "Almond Sticks",
    price: "Rs. 176.00",
    img: "/almond-sticks.webp",
  },
  {
    name: "Spl. Mysore Pak",
    price: "from Rs. 190.00",
    img: "/mysorepak.jpeg",
  },
  {
    name: "Divine Ladoo",
    price: "Rs. 164.00",
    img: "/divine-laddu.jpg",
  },
  {
    name: "Rasakulla",
    price: "Rs. 176.00",
    img: "/rasakulla.webp",
  },
  {
    name: "Butter Murukku",
    price: "from Rs. 56.00",
    img: "/buttermuruku.jpg",
  },
];

function Products() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Best Sellers!</h2>

      <div className="row">
        {products.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="product-card text-center">
              <img src={item.img} alt={item.name} />
              <h6 className="mt-3 fw-semibold">{item.name}</h6>
              <p className="price">{item.price}</p>
            </div>
                <div className="text-center mt-2">
            <button
                className="btn  add-cart-btn mt-2 "
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
          </div>
          </div>
          
        ))}
      </div>
   
  

       
      <div className="text-center mt-4">
        <Link to="/viewall" className="viewall">
        <button className="btn btn-outline-dark px-5 py-2 view-all-btn">
          VIEW ALL
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
