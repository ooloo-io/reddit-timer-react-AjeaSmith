import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../footerlogo.svg';
import * as S from './Footer.style';

const Footer = () => (
  <S.Wrapper>
    <S.Ul>
      <S.Li>
        <a
          href="https://ooloo.io/employers"
          target="_blank"
          rel="noreferrer"
          data-testid="footerLink"
        >
          ooloo.io
        </a>
      </S.Li>
      <S.Li>
        <Link to="/">
          <S.Img src={logo} alt="footer" />
        </Link>
      </S.Li>
      <S.Li>
        <Link to="/terms">Terms & Privacy</Link>
      </S.Li>
    </S.Ul>
  </S.Wrapper>
);

export default Footer;
