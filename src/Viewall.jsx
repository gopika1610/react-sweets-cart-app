
import "./Viewall.css";
import { useState } from "react";





const products = [
  {
    name: "Kaju Katli",
    price: 295,
    img: "kajukatli.webp",

  },

  {
    name: "Masala Cashew",
    price: 156,
    img: "/masala-cashew.webp",
  },
  {
    name: "kulabjamun",
    price: 408,
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
    name: "Moti Pak",
    price: "from Rs. 160.00",
    img: "/viewall/moti-pak.webp",

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
  {
    name: "Kaju King",
    price: "from Rs. 295.00",
    img: "/viewall/kaju-king.webp",

  },
  {
    name: "pista Stick",
    price: "from Rs. 275.00",
    img: "/viewall/pista stick.webp",

  },
  {
    name: "English Toffee",
    price: "from Rs. 225.00",
    img: "/viewall/english-toffee.webp",

  },

  {
    name: "Cofee Cookies",
    price: "from Rs. 160.00",
    img: "/viewall/Cofee Cookies.webp",

  },
  {
    name: "Cookies Gift Box",
    price: "from Rs. 500.00",
    img: "/viewall/Cookies Box.jpeg",

  },
  {
    name: "Corn Flakes Mixture",
    price: "from Rs. 265.00",
    img: "/viewall/carn flakes mixture.jpeg",

  },

  {
    name: "Garlic Toast",
    price: "from Rs. 150.00",
    img: "/viewall/garlic toast.jpeg",

  },
  {
    name: "Ghatia Papdi",
    price: "from Rs. 190.00",
    img: "/viewall/ghatiya papdi.jpeg",

  },
  {
    name: "White Burfi",
    price: "from Rs. 295.00",
    img: "/viewall/white burfi.jpeg",

  },
  {
    name: "Jeera Khari",
    price: "from Rs. 300.00",
    img: "/viewall/jeera-khari.webp",

  },

  {
    name: "Kaju Pakoda",
    price: "from Rs. 95.00",
    img: "/viewall/kaju pakoda.jpeg",

  },


  {
    name: "Mohanthal",
    price: "from Rs. 295.00",
    img: "/viewall/mohanthal.jpeg",

  },

  {
    name: "Namkeen paara",
    price: "from Rs. 230.00",
    img: "/viewall/namkeen-paara.webp",

  },
  {
    name: "Peri Peri Straws",
    price: "from Rs. 150.00",
    img: "/viewall/peri-peri-straws.webp",

  },

  {
    name: "Twix Tart",
    price: "from Rs. 295.00",
    img: "/viewall/twix tart.webp",

  },




];

function Viewall() {

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({});

  const increaseQty = (index) => {
    setQuantity(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
  };

  const decreaseQty = (index) => {
    setQuantity(prev => ({
      ...prev,
      [index]: prev[index] > 0 ? prev[index] - 1 : 0
    }));
  };
  const handleAddToCart = (item, index) => {
    const qty = quantity[index] || 0; // get quantity of this item
    if (qty === 0) return; // don't add if quantity is 0

    // Check if item already exists in cart
    const existingIndex = cart.findIndex(cartItem => cartItem.name === item.name);

    if (existingIndex >= 0) {
      // Update quantity
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += qty;
      setCart(updatedCart);
    } else {
      // Add new item
      setCart([...cart, { ...item, quantity: qty }]);
    }

    // Reset quantity for this product
    setQuantity(prev => ({ ...prev, [index]: 0 }));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Products</h2>

      <div className="row">
        {products.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="product-card text-center">
              <img src={item.img} alt={item.name} />
              <h6 className="mt-3 fw-semibold">{item.name}</h6>
              <p className="price">{item.price}</p>

              <div className="qty-box mt-2">


                <button className="qty-btn" onClick={() => decreaseQty(index)}>-</button>
                <span className="qty-count">{quantity[index] || 0}</span>
                <button className="qty-btn" onClick={() => increaseQty(index)}>+</button>


              </div>
            </div>

            <div className="text-center mt-2">
              <button
                className="btn  add-cart-btn mt-2 "
                onClick={() => handleAddToCart(item, index)}
              >
                Add to Cart
              </button>
            </div>
          </div>

        ))}
      </div>
      <div className="cart mt-5">
        <h3>Cart Items</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} - Qty: {item.quantity} - Rs. {item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>




    </div>
  );
}

export default Viewall;
