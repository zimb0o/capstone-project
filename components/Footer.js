import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import SpotIcon from "../components/Icons/Spot.js";
import SpotActiveIcon from "../components/Icons/SpotActive.js";
import CreateIcon from "../components/Icons/Create.js";
import CreateActiveIcon from "../components/Icons/CreateActive.js";
import FavouriteIcon from "../components/Icons/Favourite.js";
import FavouriteActiveIcon from "../components/Icons/FavouriteActive.js";
export default function Footer() {
  const { pathname } = useRouter();

  return (
    <StyledNavigation>
      <NavLink href={`/Spots`}>
        <StyledNavItem>
          {pathname === "/spots" ? <SpotActiveIcon /> : <SpotIcon />}
          <NavIconText>Spots</NavIconText>
        </StyledNavItem>
      </NavLink>

      <NavLink href={`/create`}>
        <StyledNavItem>
          {pathname === "/create" ? <CreateActiveIcon /> : <CreateIcon />}
          <NavIconText>Create Spot </NavIconText>
        </StyledNavItem>
      </NavLink>

      <NavLink href={`/favorites`}>
        <StyledNavItem>
          {pathname === "/favorites" ? (
            <FavouriteActiveIcon />
          ) : (
            <FavouriteIcon />
          )}
          <NavIconText>Favorites</NavIconText>
        </StyledNavItem>
      </NavLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  background-image: linear-gradient(
    180deg,
    hsl(180deg 8% 33%) 0%,
    hsl(180deg 8% 30%) 33%,
    hsl(180deg 8% 26%) 50%,
    hsl(180deg 8% 23%) 67%,
    hsl(180deg 8% 20%) 100%
  );
  border: 1px solid;
  padding: 2px 20px 1px 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 37px 10px 50px 0px #000000;
  z-index: 100;
  @media (min-width: 450px) {
    justify-content: space-evenly;
  }
`;

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;

  :hover {
    filter: drop-shadow(37px 10px 50px 26px #000000);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const NavIconText = styled.p`
  color: white;
  margin: 2px;
`;
