import React from "react";
import { Link } from "react-router-dom";

// Start main fun
function Navbar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          // justifyContent: "space-between",
        }}
      >
        <button style={{ width: "120px", height: "30px" }}>
          <Link
            style={{
              color: "black",
              fontSize: "20px",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </Link>
        </button>
        <button
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            width: "120px",
            height: "30px",
          }}
        >
          <Link
            style={{
              color: "black",
              fontSize: "20px",
              textDecoration: "none",
            }}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </button>
        <button style={{ width: "120px", height: "30px" }}>
          <Link
            style={{
              color: "black",
              fontSize: "20px",
              textDecoration: "none",
            }}
            to="/about"
          >
            About Us
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
