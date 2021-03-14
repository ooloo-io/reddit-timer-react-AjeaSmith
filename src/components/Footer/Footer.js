import React from "react";
import { Link } from "react-router-dom";
import logo from "../../footerlogo.svg";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <Link to="https://ooloo.io/employers">ooloo</Link>
        </li>
        <li>
          <Link to="/">
            <img src={logo} alt="footer" />
          </Link>
        </li>
        <li>
          <Link to="/terms">Terms & Privacy</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
