import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function Collections() {
  const { category } = useParams(); // URL-la irukkura path (e.g., milk-sweets)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Backend-kku request anuppi products-ai edukka
        const res = await axios.get(`http://localhost:5000/api/products/category/${category}`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]); 

  if (loading) return <div className="text-center my-5">Loading Products...</div>;

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4 text-capitalize">
        {category.replace("-", " ")}
      </h2>
      <Row className="g-4">
        {products.length > 0 ? (
          products.map((item) => (
            <Col md={3} key={item._id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
                <Card.Body className="text-center">
                  <Card.Title>{item.name}</Card.Title>
                  <p className="fw-bold">Rs. {item.price}</p>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </Row>
    </Container>
  );
}

export default Collections;