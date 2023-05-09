import React, { useState } from "react";
import styled from "styled-components";

export default function SpotDetails() {
  return (
    <SpotDetailsSection>
      <DetailsLabel>Details:</DetailsLabel>
      <DetailsList>
        <li>Tasks: Indoor</li>
        <li>Equipment: Medium</li>
        <li>Age: 2 years</li>
      </DetailsList>
    </SpotDetailsSection>
  );
}

const SpotDetailsSection = styled.div`
  margin-top: 10px;
`;

const DetailsLabel = styled.h3`
  margin: 0;
`;

const DetailsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
