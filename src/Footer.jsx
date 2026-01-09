import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-black text-white pt-5">
            <Container>
                <Row className="pb-4">
                 
                    <Col md={3}>
                        <h5 className="fw-bold mb-3 fs-5">ABOUT</h5>
                        <hr className="border-light opacity-50 w-75" />
                        <ul className="list-unstyled lh-lg fw-bold">
                            <li>Home page</li>
                            <li>About Us</li>
                            <li>Our Branches</li>
                            <li>Search</li>
                            <li>All Products</li>
                            <li>Leave Us Your Feedback</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>

                   
                    <Col md={3}>
                        <h5 className="fw-bold mb-3 fs-5">POLICIES</h5>
                        <hr className="border-light opacity-50 w-75" />
                        <ul className="list-unstyled lh-lg fw-bold">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Refund Policy</li>
                            <li>Shipping Policy</li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h5 className="fw-bold mb-3 fs-5">EXPLORE</h5>
                        <hr className="border-light opacity-50 w-75" />
                        <ul className="list-unstyled lh-lg fw-bold ">
                            <li>Sweets</li>
                            <li>Savouries</li>
                            <li>Bakery</li>
                            <li>Hampers</li>
                            <li>Festival & Corporate Orders</li>
                        </ul>
                    </Col>
                </Row>

                <hr className="border-light opacity-50" />

              
                <Row className="py-3 align-items-center">
                    <Col md={6} className="mb-5 mb-md-0">

                        <div className="d-flex gap-3 ">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>


                        <p className="mt-4 mb-3 fw-bold">
                            © 2026 Shree Mithai
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
