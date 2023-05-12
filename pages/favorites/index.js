import styled from "styled-components";
import SpotCard from "../../components/SpotCard.js";

export default function FavoriteSpots({ spots, setSpots }) {
  function toggleBookmark(id) {
    const newSpotArray = spots?.map((spot) => {
      if (spot?.id === id) {
        return {
          ...spot,
          isBookmark: !spot.Bookmark,
        };
      } else {
        return spot;
      }
    });
    setSpots(newSpotArray);
  }

  return (
    <>
      <StyledBookmarkSection>
        <ul>
          {spots?.map((spot) => {
            if (spot.isBookmark === true) {
              return (
                <SpotCard
                  spot={spot}
                  key={spot.name}
                  toggleBookmark={toggleBookmark}
                />
              );
            } else {
              return null;
            }
          })}
        </ul>
      </StyledBookmarkSection>
    </>
  );
}

const StyledBookmarkSection = styled.section`
  margin: 80px 0 30px 0;
`;
