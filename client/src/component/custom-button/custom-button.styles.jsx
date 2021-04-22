import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const InvertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    display: block;
  }
`;
const GoogleSignInStyles = css`
  background-color: #4285f4;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getGuttonStyles = (props) => {
  if (props.googleSignIn) {
    return GoogleSignInStyles;
  } else if (props.inverted) {
    return InvertedButtonStyles;
  } else {
    return ButtonStyles;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  ${getGuttonStyles}
`;
