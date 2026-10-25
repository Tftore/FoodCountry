import { NavLink } from "react-router";
import { Container } from "./Container";
import styled from "@emotion/styled";

const StyledHedaer = styled.header`
  border-bottom: 2px solid gray;
`;

const HedaerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .logo {
    font-size: 30px;
    font-weight: 700;
  }
  & nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    & a {
      color: black;
      font-weight: 700;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHedaer>
      <HedaerContainer>
        <p className="logo">Food Project</p>
        <nav>
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/category">Категорії</NavLink>
          <NavLink to="/country">Країни</NavLink>
        </nav>
      </HedaerContainer>
    </StyledHedaer>
  );
};
