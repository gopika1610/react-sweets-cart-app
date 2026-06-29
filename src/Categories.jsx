
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
 
  const categories = [
    { title: "Milk Sweets", img: "/milk-sweet.webp", path: "milk-sweets" },
    { title: "Cashew Sweets", img: "/cashew-sweets.webp", path: "cashew-sweets" },
    { title: "Ghee Sweets", img: "/ghee-sweets.webp", path: "ghee-sweets" },
    { title: "Savouries", img: "/savouries.webp", path: "savouries" },
    { title: "Assorted Sweets", img: "/assorted-sweets.webp", path: "assorted-sweets" },
    { title: "Bakery Delights", img: "/checkerboard-cake.webp", path: "bakery-delights" },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4 heading">
        Sweets, treats and eat for every craving!
      </h2>
      <Row className="g-4">
        {categories.map((cat, index) => (
          <Col md={4} key={index}>
            {/* Dynamic path: /collections/ + path-name */}
            <Link 
              to={`/collections/${cat.path}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card className="category-card border-0 text-center h-100 shadow-sm">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="category-img rounded-4"
                />
                <Card.Body>
                  <Card.Title>{cat.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;