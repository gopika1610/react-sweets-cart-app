import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Categories.css"

function Categories() {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Sweets,treats and eat for every craving!</h2>
      <Row className="g-4">
        
       
        <Col md={4}>
          <Card className="category-card border-0 text-center">
            <img
              src="/milk-sweet.webp"
              alt="Milk Sweets"
              className="category-img rounded-4"
            />
            <Card.Body>
              <Card.Title>Milk Sweets</Card.Title>
            </Card.Body>
          </Card>
        </Col>
         <Col md={4}>
          <Card className="category-card border-0 text-center">
            <img
              src="/cashew-sweets.webp"
              alt="Cashew Sweets"
              className="category-img rounded-4"
            />
            <Card.Body>
              <Card.Title>Cashew Sweets</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="category-card border-0 text-center">
            <img
              src="/ghee-sweets.webp"
              alt="Ghee Sweets"
              className="category-img rounded-4"
            />
            <Card.Body>
              <Card.Title>Ghee Sweets</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="category-card border-0 text-center">
            <img
              src="/savouries.webp"
              alt="savouries"
              className="category-img rounded-4"
            />
            <Card.Body>
              <Card.Title>savouries</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="category-card border-0 text-center">
            <img
              src="/assorted-sweets.webp"
              alt="Assorted Sweets"
              className="category-img rounded-4"
            />
            <Card.Body>
              <Card.Title>Assorted Sweets</Card.Title>
            </Card.Body>
          </Card>
        </Col>
       
        <Col md={4}>
          <Card className="category-card border-0 text-center">
            <img
              src="/checkerboard-cake.webp"
              alt="Bakery Delights"
              className="category-img rounded-4"
            />
            <Card.Body>
              <Card.Title>Bakery Delights</Card.Title>
            </Card.Body>
          </Card>
        </Col>
         
      </Row>
    </Container>
  );
}

export default Categories;
