
import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function ProductPage() {
  const { categoryName } = useParams(); 
  

  const { products, setCart } = useOutletContext();

 
  if (!products || products.length === 0) {
    return <div className="text-center my-5 fw-bold" style={{ minHeight: "50vh", paddingTop: "15%" }}>Loading delicacies...</div>;
  }

 
  const filteredProducts = products.filter((item) => {
    const dbCategory = item.category?.toLowerCase().trim() || "";
    const urlCategory = categoryName?.toLowerCase().trim() || "";
    return dbCategory === urlCategory || dbCategory.replaceAll(" ", "-") === urlCategory;
  });

  const handleAddToCartDirect = async (product) => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!user._id) {
      alert("Please login to add items to your cart!");
      return;
    }
    try {
      const response = await axios.post("https://sweet-cart-backend-app.onrender.com/api/cart/add", {
        userId: user._id,
        productId: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl || product.image || "/default-product.png",
        quantity: 1,
      });
      if (setCart) setCart(response.data);
      alert(`✅ ${product.name} added to cart!`);
    } catch (err) {
      console.error("Cart error:", err);
    }
  };

  return (
    <Container className="my-5">
    
      <h2 className="text-capitalize mb-4 fw-bold" style={{ color: "#4a2c11" }}>
        {categoryName ? categoryName.replaceAll("-", " ") : ""}
      </h2>

      <Row className="g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col md={3} key={product._id}>
              <Card className="h-100 shadow-sm border-0 product-card">
                <Card.Img 
                  variant="top" 
                  src={product.imageUrl || product.image || "/default-product.png"} 
                  alt={product.name} 
                  style={{ height: "200px", objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold fs-6">{product.name}</Card.Title>
                  <Card.Text className="fw-bold text-success">₹ {product.price}</Card.Text>
                  <Button 
                    variant="dark" 
                    className="w-100"
                    onClick={() => handleAddToCartDirect(product)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center my-5">
            <p className="text-muted fs-5">No products found in this category.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ProductPage;