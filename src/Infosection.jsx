import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaShoppingCart, FaSeedling } from "react-icons/fa"; // icons

function InfoSection() {
  return (
    <div style={{ backgroundColor: "darkred", color: "white", padding: "20px 20px 0 0" }}>
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <FaTruck size={30} className="mb-3" />
            <h5>Pan India Shipping!</h5>
            <p>We are now shipping a curated section of our Mithai across the country!</p>
          </Col>
          <Col md={4} className="mb-4">
            <FaShoppingCart size={30} className="mb-3" />
            <h5>Bulk Corporate & Festive Orders</h5>
            <p>Order in advance and in bulk from our Diwali & Dussehra special catalogs</p>
          </Col>
          <Col md={4} className="mb-4">
            <FaSeedling size={30} className="mb-3" />
            <h5>Fresh & Seasonal</h5>
            <p>Our menu follows the seasons, featuring the best local produce available</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InfoSection;
