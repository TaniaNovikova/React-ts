import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: rebeccapurple;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

`;
export const LogoContainer = styled.div`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: rebeccapurple;
  color: white;
`;

