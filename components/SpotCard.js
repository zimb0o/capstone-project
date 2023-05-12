import React, { useState } from "react";
import styled from "styled-components";
import SpotDetails from "../components/SpotDetails.js";

export default function SpotCard({ spot, toggleBookmark }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card isExpanded={isExpanded}>
      <BookmarkButton
        isBookmarked={true}
        onClick={() => {
          toggleBookmark(spot?.id);
        }}
      >
        {spot?.isBookmark ? (
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
          </svg>
        )}
      </BookmarkButton>
      <TextContainer>
        <Name>{spot?.name}</Name>
        <Address>{spot?.address}</Address>
      </TextContainer>

      <ImageContainer>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/600px-Hauskatze_langhaar.jpg"
          alt="Spot Image"
        />
      </ImageContainer>
      <Button onClick={handleExpandClick}>
        {isExpanded ? "schließen" : "weitere Details"}
      </Button>
      {isExpanded && <SpotDetails />}
    </Card>
  );
}

const Card = styled.section`
  background-color: #e0e0e0;
  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;

  ${({ isExpanded }) =>
    isExpanded &&
    `
      height: 500px;
      transition: height 0.3s ease-in-out;
    `}
`;

const ImageContainer = styled.div`
  flex: 0;
  display: flex;
  justify-content: flex-end;

  align-items: flex-end;
  position: relative;
`;

const Image = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.h2`
  margin: 0;
`;

const Address = styled.p`
  margin: 0;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #c2c2c2;
  color: #fff;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #a0a0a0;
  }
`;

const BookmarkButton = styled.button`
  border: 1rem;
  border-radius: 5px;
  right: -10px;
`;
