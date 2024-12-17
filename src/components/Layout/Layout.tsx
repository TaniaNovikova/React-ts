import { useNavigate } from "react-router-dom";

import { Footer, Header, LayoutComponent, NavContainer, LogoContainer, Main, StyledNavLink, LogoImg } from "./styles"
import { LayoutProps } from "./types"
import LogoTN from "assets/TNLogo.png"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <LayoutComponent>
      <Header>
        <LogoContainer onClick={goToHomePage}><LogoImg src={LogoTN}/></LogoContainer>
        <NavContainer>
          <StyledNavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Home
          </StyledNavLink>
          <StyledNavLink to='/about' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            About
          </StyledNavLink>
          <StyledNavLink to='/users' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Users
          </StyledNavLink>
          <StyledNavLink to='/clients' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>
        {/* вместо prop children происходит подстановка различного контента в Layout при изменении url */}
        {children}
      </Main>
      <Footer><LogoContainer onClick={goToHomePage}><LogoImg src={LogoTN}/></LogoContainer></Footer>
    </LayoutComponent>
  )
}

export default Layout