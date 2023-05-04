import React from "react";
import styled from "styled-components";

export default function SpotCard({ name, adresse }) {
  return (
    <Card>
      <Content>
        <Name>Trimm-Dich-Pfad{name} </Name>
        <Adress>Am Planetarium{adresse}</Adress>
      </Content>
    </Card>
  );
}
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 50%;
`;

const Content = styled.div`
  padding: 16px;
  margin: px;
`;

const Name = styled.h2`
  margin: 0;
  padding: 10;
`;

const Adress = styled.p`
  margin: 8px 0;
`;
