import React from "react";
import styled from "styled-components";
import SpotCard from "../components/SpotCard.js";
import SpotList from "@/components/SpotList.js";

export default function App() {
  return (
    <div>
      <h1>TheCaliSpots</h1>
      <SpotCard />
      <SpotList />
    </div>
  );
}

const headline = styled.h1`
  margin: 10px;
  padding: 20px;
  left: 30px;
`;
