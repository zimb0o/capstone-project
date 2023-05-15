import styled from "styled-components";
import SpotCard from "../../components/SpotCard.js";

export default function FavoriteSpots({ spots, toggleBookmark }) {
  return (
    <StyledBookmarkSection>
      <SpotCard>
        {spots?.map((spot) => {
          if (spot.isBookmark === true) {
            return (
              <SpotCard
                spot={spot}
                key={spot.id}
                toggleBookmark={toggleBookmark}
              />
            );
          } else {
            return null;
          }
        })}
      </SpotCard>
    </StyledBookmarkSection>
  );
}

const StyledBookmarkSection = styled.section`
  margin: 80px 0 30px 0;
  padding: 10px;
`;
