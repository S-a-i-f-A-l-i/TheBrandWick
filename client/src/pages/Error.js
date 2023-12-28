import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <img src={img} alt="page not found" width="100%" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </div>
  );
};

export default Error;
