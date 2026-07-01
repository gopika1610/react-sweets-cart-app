import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Festivebakes() {
  return (
    <div
      className="d-flex justify-content-center align-items-center mt-5 py-5"
     style={{
  height: "100vh",
  backgroundImage: "url('/festive.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "20px",
}}
    >
      <Link to="/Explore" className="Explore">
    
      <Button
        variant="light"
        size="lg"
      className="px-4 px-md-5 py-3 rounded-pill shadow fw-semibold text-center"
      >
        Explore and Order Away
      </Button>
      </Link>
   
    </div>
  );
}

export default Festivebakes;
