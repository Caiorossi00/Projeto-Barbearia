import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Content of the About page.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default About;
