import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Title>theCaliSpots</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: var(--white-color);
  position: fixed;
  width: 100%;
  height: auto;
  display: flex;
`;

const Title = styled.title`
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
`;
