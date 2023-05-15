import styled from "styled-components";
import SpotCard from "../../components/SpotCard.js";

export default function Spots({ spots, toggleBookmark }) {
  return (
    <StyledSpotsSection>
      {spots?.map((spot) => {
        return (
          <SpotCard spot={spot} key={spot.id} toggleBookmark={toggleBookmark} />
        );
      })}
    </StyledSpotsSection>
  );
}

const StyledSpotsSection = styled.section`
  margin: 80px 0 30px 0;
`;
