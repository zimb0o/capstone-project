import styled from "styled-components";
import React from "react";
import SpotDetails from "../components/SpotDetails.js";

export default function SpotCard({ name, address }) {
  return (
    <>
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
      <SpotDetailsContainer>
        <SpotDetails />
      </SpotDetailsContainer>
    </>
  );
}

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
  justify-content: flex-start;
  align-items: flex-start;
`;

const Name = styled.h2`
  margin: 0;
`;

const Address = styled.p`
  margin: 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SpotDetailsContainer = styled.div`
  margin: 0;
`;
