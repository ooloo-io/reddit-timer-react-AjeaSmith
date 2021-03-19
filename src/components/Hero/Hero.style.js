import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 30px;
`;

export const Subtitle = styled.small`
  color: #93918f;
  margin-bottom: 30px;
  font-size: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Small = styled.small`
  color: #93918f;
  margin: 26px 0;
`;

export const CTAButton = styled.button`
  background: #fdb755;
  text-align: center;
  text-transform: uppercase;
  border: none;
  outline: none;
  width: 217px;
  height: 36px;
  border-radius: 3px;
`;

export const Link = styled.a`
  font-size: 14px;
  color: white;
`;
