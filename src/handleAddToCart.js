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
