import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      (user) => user.email === email && user.password === password
    );

    if (found) {
      toast.success("🎉 Sign in successfully!");
      // Optionally store current logged-in user
      localStorage.setItem("currentUser", JSON.stringify(found));
      setTimeout(() => navigate("/"), 1500); // navigate after toast
    } else {
      toast.error("❌ Invalid email or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ width: "400px" }}>
        <h3 className="mb-4 text-center fw-bold">Login</h3>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Row className="align-items-center">
              <Col>
                <Form.Label className="fw-bold">Password</Form.Label>
              </Col>
              <Col className="text-end">
                <span style={{ fontSize: "0.9rem" }}>Forgot your password?</span>
              </Col>
            </Row>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 mb-3 fw-bold">
            SIGN IN
          </Button>

          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1" />
            <span className="px-2 text-muted fw-bold">OR</span>
            <hr className="flex-grow-1" />
          </div>

          <Link to="/register" className="text-decoration-none">
            <Button variant="dark" className="w-100 fw-bold">
              CREATE ACCOUNT
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
