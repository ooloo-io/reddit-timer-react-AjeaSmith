import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const FormInput = styled.input`
  margin: 30px 10px;
  padding: 8px;
  width: 370px;
  border: 2px solid #d5d5d5;
  border-radius: 3px;
`;

export const FormLabel = styled.label`
  color: #9e9e9e;
  font-size: 18px;
`;

export const FormButton = styled.button`
  background: #fdb755;
  border: none;
  height: 33px;
  width: 92px;
  text-transform: uppercase;
  color: white;
  border-radius: 3px;
`;
