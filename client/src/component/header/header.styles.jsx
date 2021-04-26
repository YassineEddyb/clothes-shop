import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderComponent = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.ul`
  list-style: none;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px;
  color: black;
  cursor: pointer;
  text-decoration: none;
`;
