import React, { useState } from "react";
import styled from "styled-components";
import SpotDetails from "../components/SpotDetails.js";

export default function SpotCard({ name, address }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card isExpanded={isExpanded}>
      <TextContainer>
        <Name>{name}</Name>
        <Address>{address}</Address>
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
`;

const Image = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
