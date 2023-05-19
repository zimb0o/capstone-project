import styled from "styled-components";
import { useRouter } from "next/router";
export default function Header() {
  const { pathname } = useRouter();

  function setTitle() {
    switch (pathname) {
      case "/spots":
        return "Spots";
      case "/create":
        return "add your Spot";
      case "/favorites":
        return "Favorites";
    }
  }
  let title = setTitle();
  return (
    <StyledHeader>
      <Headline>{title}</Headline>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: var(--white-color);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2px 0 6px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
`;

const Headline = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  margin-bottom: 20px;
`;
