
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"; 
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // 🌟 Triggering Axios POST call straight to live backend user endpoint
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.data) {
        toast.success("🎉 Sign in successfully!");
        
        // Save current active logged in session profile array internally
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        
        // 🔥 THE CRUCIAL MISSING LINK: Notify App.jsx to instantaneously switch the cart data!
        window.dispatchEvent(new Event("storage_auth_update"));
        
        setTimeout(() => navigate("/"), 1500); 
      }
    } catch (error) {
      console.error("Login trigger failed:", error);
      const errorMessage = error.response?.data?.message || "❌ Invalid email or password";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ width: "400px" }}>
        <h3 className="mb-4 text-center fw-bold">Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" required />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100 mb-3 fw-bold">SIGN IN</Button>
          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1" /> <span className="px-2 text-muted fw-bold">OR</span> <hr className="flex-grow-1" />
          </div>
          <Link to="/register" className="text-decoration-none">
            <Button variant="outline-dark" className="w-100 fw-bold">CREATE ACCOUNT</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;