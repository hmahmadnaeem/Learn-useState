import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <center>
      <h1>This is Portfolio page</h1>
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            // backgroundColor: "red",
            width: "150px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/web">
            <button>WebApp</button>
          </Link>
          <Link to="/mobile">
            <button>MobileApp</button>
          </Link>
        </div>
      </div>
    </center>
  );
}
export default Portfolio;
