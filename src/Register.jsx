import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

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

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password) {
      alert("All fields are required ❌");
      return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert("Email already registered ❌");
      return;
    }

    // Add new user
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully ✅");
    navigate("/login");
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h3 className="text-center fw-bold mb-3">Register</h3>

        <Form onSubmit={handleCreateAccount}>
          <Form.Group className="mb-2">
            <Form.Label className="fw-bold">First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="fw-bold">Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 mb-3 fw-bold">
            Create
          </Button>

          <div className="text-center">
            <Link to="/login">Already have an account?</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
