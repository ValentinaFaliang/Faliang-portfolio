import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p>© Copyrigth 2023 -</p>
        <Link to="/">
          <span onClick={() => window.scrollTo(0, 0)}>Valentina Vlasenko</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
