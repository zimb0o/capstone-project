import React from "react";
import styled from "styled-components";
import SpotCard from "../components/SpotCard.js";
import SpotList from "../components/SpotList.js";
import Header from "../components/Header.js";

export default function App() {
  return (
    <div>
      <Header />
      <SpotCard />
      <SpotList />
    </div>
  );
}
