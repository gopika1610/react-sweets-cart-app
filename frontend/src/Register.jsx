
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"; // 🌟 Added Axios for live API integration
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🌟 Async block for server mapping action
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password) {
      toast.warning("⚠️ All fields are required!");
      return;
    }

    try {
      // 🌟 Direct dynamic target call to backend node server register api route
      const response = await axios.post("http://localhost:5000/api/users/register", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.data) {
        toast.success("🎉 Account created successfully!");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (error) {
      console.error("Backend register mapping runtime crash error:", error);
      
      const errorMessage = error.response?.data?.message || "❌ Registration failed. Try again!";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h3 className="text-center fw-bold mb-3">Register</h3>
        <Form onSubmit={handleCreateAccount}>
          <Form.Group className="mb-2">
            <Form.Label className="fw-bold">First Name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="fw-bold">Last Name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 mb-3 fw-bold">Create</Button>
          <div className="text-center"><Link to="/login">Already have an account?</Link></div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
