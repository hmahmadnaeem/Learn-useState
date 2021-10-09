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
        <Link
          style={{
            color: "black",

            textDecoration: "none",
          }}
          to="/"
        >
          <button style={{ width: "120px", height: "30px", fontSize: "20px" }}>
            {" "}
            Home
          </button>
        </Link>

        <Link
          style={{
            color: "black",

            textDecoration: "none",
          }}
          to="/portfolio"
        >
          <button
            style={{
              fontSize: "20px",
              marginLeft: "20px",
              marginRight: "20px",
              width: "120px",
              height: "30px",
            }}
          >
            Portfolio
          </button>
        </Link>

        <Link
          style={{
            color: "black",

            textDecoration: "none",
          }}
          to="/about"
        >
          <button style={{ width: "120px", height: "30px", fontSize: "20px" }}>
            About Us{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
