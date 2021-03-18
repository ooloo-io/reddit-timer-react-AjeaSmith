import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../footerlogo.svg';
import {
  Wrapper, Ul, Img, Li,
} from './Footer.style';

const Footer = () => (
  <Wrapper>
    <Ul>
      <Li>
        <a
          href="https://ooloo.io/employers"
          target="_blank"
          rel="noreferrer"
        >
          ooloo.io
        </a>
      </Li>
      <Li>
        <Link to="/">
          <Img src={logo} alt="footer" />
        </Link>
      </Li>
      <Li>
        <Link to="/terms">Terms & Privacy</Link>
      </Li>
    </Ul>
  </Wrapper>
);

export default Footer;
