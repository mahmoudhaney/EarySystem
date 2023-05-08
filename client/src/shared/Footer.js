import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; 2023{" "}
          <span>
            <Link to={"/"}>Eeary</Link>
          </span>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
