import React from "react";


 function ProductList({ products, addToCart }) {
return (
<div style={{ display: "flex", gap: 20 }}>
{products.map(product => (
<div key={product.id} style={{ border: "1px solid #ccc", padding: 10 }}>
<img src={product.image} alt={product.name} />
<h4>{product.name}</h4>
<p>₹ {product.price}</p>
<button onClick={() => addToCart(product)}>Add to Cart</button>
</div>
))}
</div>
);
}
export default ProductList;