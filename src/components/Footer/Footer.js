import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../footerlogo.svg';

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>ooloo</li>
        <li>
          <Link to="/">
            <img src={logo} alt="footer" />
          </Link>
        </li>
        <li>Terms & Privacy</li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
