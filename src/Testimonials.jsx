import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Testimonials() {
  const Stars = () => (
    <div className="text-danger fs-4 mb-3">★★★★★</div>
  );

  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold mb-5">
        Scrumptious Experiences, Happy Voices!
      </h2>

      <Row className="gy-5">
        <Col md={4}>
          <Stars />
          <h4 className="fw-bold mb-3">Thick & Creamy!</h4>
          <p className="fw-semibold">
            I love their Kala Jamun - super scrumptious and tastes out of the
            world. The basundi is another creamy favorite and the Jangris were big
            and juicy as they are meant to be.
          </p>
          <p className="fw-bold mt-4">-Uma Ranganathan</p>
        </Col>

        <Col md={4}>
          <Stars />
          <h4 className="fw-bold mb-3">A grade for Pure Sweets!</h4>
          <p className="fw-semibold">
            It is the best place for getting the best grade sweets and chats. I
            love their service. I suggest this place to get sweets for any
            occasion and to spend time with loved ones.
          </p>
          <p className="fw-bold mt-4">-Ghiri T</p>
        </Col>

        <Col md={4}>
          <Stars />
          <h4 className="fw-bold mb-3">Best place in Chennai!</h4>
          <p className="fw-semibold">
            One of the best places I've been to in Chennai. Definitely raised the
            benchmark of Chole Bhature. Loved the ambience as well. A #mustvisit
            for desi foodies!
          </p>
          <p className="fw-bold mt-4">-Mijar Aditya Shenoy</p>
        </Col>
      </Row>

      <h4 className="fw-bold mt-5">
        Follow @shreemithai on Instagram
      </h4>
    </Container>
  );
}

export default Testimonials;
