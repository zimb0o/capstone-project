import styled from "styled-components";
import SpotCard from "../../components/SpotCard.js";

export default function Spots({ spots, setSpots }) {
  function toggleBookmark(id) {
    const newSpotArray = spots.map((spot) => {
      if (spot.id === id) {
        return {
          ...spot,
          isBookmark: !spot.isBookmark,
        };
      } else {
        return spot;
      }
    });
    setSpots(newSpotArray);
  }

  return (
    <StyledSpotsSection>
      {spots?.map((spot) => {
        return (
          <SpotCard
            spot={spot}
            key={spot.name}
            toggleBookmark={toggleBookmark}
          />
        );
      })}
    </StyledSpotsSection>
  );
}

const StyledSpotsSection = styled.section`
  margin: 80px 0 30px 0;
`;

const PlaceholderText = styled.p`
  padding: 50px;
  text-align: center;
  color: var(--primary-color);
`;
