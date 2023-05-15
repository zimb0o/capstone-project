import styled from "styled-components";
import SpotCard from "../../components/SpotCard.js";

export default function FavoriteSpots({ spots, toggleBookmark }) {
  return (
    <StyledBookmarkSection>
      {spots
        .filter((spot) => spot.isBookmark)
        .map((spot) => (
          <SpotCard spot={spot} key={spot.id} toggleBookmark={toggleBookmark} />
        ))}
    </StyledBookmarkSection>
  );
}

const StyledBookmarkSection = styled.section`
  margin: 80px 0 30px 0;
  padding: 10px;
`;
