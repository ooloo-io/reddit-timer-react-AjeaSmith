import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/redditlogo.svg';
import * as S from './Header.style';

const Header = () => (
  <S.Wrapper>
    <S.Nav>
      <Link to="/">
        <S.Logo src={logo} alt="reddit" />
      </Link>
      <S.Ul>
        <S.Li>
          <Link to="/search/javascript">Search</Link>
        </S.Li>
        <S.Li>
          <a href="#how-it-works">How it works</a>
        </S.Li>
        <S.Li>
          <a href="#about">About</a>
        </S.Li>
      </S.Ul>
    </S.Nav>
  </S.Wrapper>
);
export default Header;
