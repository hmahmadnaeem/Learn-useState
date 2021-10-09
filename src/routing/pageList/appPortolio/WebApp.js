import React from "react";
import { Link } from "react-router-dom";

function WebApp() {
  return (
    <center>
      <h1>This is WebApp portfolio</h1>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/mobile">
          <button>MobileApp</button>
        </Link>
      </div>
    </center>
  );
}
export default WebApp;
