import styled from "styled-components";

export default function SpotCard({ name, address }) {
  return (
    <Card>
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
    </Card>
  );
}

const Card = styled.article`
  background-color: #e0e0e0;
  display: flex;
  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
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
