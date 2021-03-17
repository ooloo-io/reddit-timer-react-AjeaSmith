import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/redditlogo.svg';
import {
  Wrapper, Nav, Ul, Li, Logo,
} from './Header.style';

const Header = () => (
  <Wrapper>
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="reddit" />
      </Link>
      <Ul>
        <Li>
          <Link to="/search/javascript">Search</Link>
        </Li>
        <Li>
          <a href="#how-it-works">How it works</a>
        </Li>
        <Li>
          <a href="#about">About</a>
        </Li>
      </Ul>
    </Nav>
  </Wrapper>
);
export default Header;
