import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../redditlogoOptimized.svg';

const StyledHeader = styled.header`
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 32px;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 150px;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
const StyledLi = styled.li`
  font-size: 16px;
  margin-right: 25px;
`;
const Header = () => (
  <StyledHeader>
    <StyledNav>
      <Link to="/">
        <StyledImg src={logo} alt="reddit" />
      </Link>
      <StyledUl>
        <Link to="/search/javascript">Search</Link>
        <StyledLi>
          <a href="#how-it-works">How it works</a>
        </StyledLi>
        <StyledLi>
          <a href="#about">About</a>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  </StyledHeader>
);
export default Header;
