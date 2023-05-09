import React from "react";
import styled from "styled-components";

import SpotList from "../components/SpotList.js";
export default function App() {
  return (
    <div>
      <SpotList />
    </div>
  );
}

const headline = styled.h1`
  margin: 10px;
  padding: 20px;
  left: 30px;
`;
