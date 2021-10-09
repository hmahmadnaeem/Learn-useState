import React from "react";
import { Link } from "react-router-dom";

function MobileApp() {
  return (
    <center>
      <h1>This is MobileApp portfolio</h1>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/web">
          <button>WebApp</button>
        </Link>
      </div>
    </center>
  );
}
export default MobileApp;
