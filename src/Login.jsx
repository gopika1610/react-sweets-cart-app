import "./Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ width: '400px' }}>
        <h3 className="mb-4 text-center fw-bold">Login</h3>

        <Form>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formPassword">
            <Row className="align-items-center">
              <Col>
                <Form.Label className="fw-bold">Password</Form.Label>
              </Col>
              <Col className="text-end">
                <a href="#" style={{ fontSize: '0.9rem', textDecoration: 'none', }}>Forgot your password?</a>
              </Col>
            </Row>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Link to="/" className="singin" >
            <Button  variant="dark" type="submit" className="w-100 mb-3 fw-bold">
              SIGN IN
            </Button>
          </Link>

          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1" />
            <span className="px-2 text-muted fw-bold">OR</span>
            <hr className="flex-grow-1" />
          </div>

          <Link to="/register" className="Register">
            <Button
              type="button"
              variant="dark"
              className="w-100 mb-3 fw-bold create-btn"
            >
              CREATE ACCOUNT
            </Button>

          </Link>

          <div className="d-flex justify-content-center gap-2">
            <Button variant="light" className="shadow-sm p-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                style={{ width: '20px', height: '20px' }}
              />
            </Button>
            <Button variant="light" className="shadow-sm p-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
                style={{ width: '20px', height: '20px' }}
              />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
