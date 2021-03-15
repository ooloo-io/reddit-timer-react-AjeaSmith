import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../footerlogo.svg';
import {
  Wrapper, Nav, Ul, Img,
} from './Footer.style';

const Footer = () => (
  <Wrapper>
    <Nav>
      <Ul>
        <li>
          <Link to="https://ooloo.io/employers">ooloo</Link>
        </li>
        <li>
          <Link to="/">
            <Img src={logo} alt="footer" />
          </Link>
        </li>
        <li>
          <Link to="/terms">Terms & Privacy</Link>
        </li>
      </Ul>
    </Nav>
  </Wrapper>
);

export default Footer;
