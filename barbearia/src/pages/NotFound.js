import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
