import styled, {css } from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  border: 1px solid #81259d;
  border-radius: 21px;
  
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      border: 1px solid #ccc;
      cursor: not-allowed;
    `}

  &:hover {
    opacity: 0.8;
  }
`;
