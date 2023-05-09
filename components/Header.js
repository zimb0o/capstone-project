import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Title>CaliSpots</Title>
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
`;

const Title = styled.h1``;