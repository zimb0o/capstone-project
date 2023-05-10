import styled from "styled-components";
import React from "react";
import SpotDetails from "../SpotDetails.js";
import { FaAngleDown } from "react-icons/fa";

export default function SpotCard({ name, address }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
<<<<<<< HEAD
    <>
=======
    <Card>
>>>>>>> main
      <TextContainer>
        <Name>{name}</Name>
        <Address>{address}</Address>
      </TextContainer>
      <ImageContainer>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/600px-Hauskatze_langhaar.jpg"
          alt="Spot Image"
        />
<<<<<<< HEAD
        <Button isExpanded={isExpanded} onClick={toggleExpand}>
          <FaAngleDown size={20} />
        </Button>
      </ImageContainer>
      <SpotDetailsContainer isExpanded={isExpanded}>
        <SpotDetails />
      </SpotDetailsContainer>
    </>
=======
      </ImageContainer>
    </Card>
>>>>>>> main
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
  height: ${(props) => (props.isExpanded ? "400px" : "auto")};
  overflow: ${(props) => (props.isExpanded ? "scroll" : "hidden")};
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

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
    ${(props) =>
      props.isExpanded ? "transform: translateY(-50%) rotate(180deg);" : ""}
  }
`;

const SpotDetailsContainer = styled.div`
  height: ${(props) => (props.isExpanded ? "400px" : "auto")};
  overflow: ${(props) => (props.isExpanded ? "scroll" : "hidden")};
  transition: height 0.3s ease;
`;
