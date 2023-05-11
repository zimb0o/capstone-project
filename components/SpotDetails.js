import React from "react";
import styled from "styled-components";

export default function SpotDetails({
  name,
  address,
  tasks = [],
  equipment = [],
}) {
  return (
    <Details>
      <Name>{name}</Name>
      <Address>{address}</Address>
      <Tasks>
        <Title>Übungen:</Title>
        {tasks.map((task, index) => (
          <Checkbox key={index}>
            <input type="checkbox" id={`task-${index}`} />
            <label htmlFor={`task-${index}`}>{task.name}</label>
          </Checkbox>
        ))}
      </Tasks>
      <Equipment>
        <Title>Trainingsgeräte:</Title>
        {equipment.map((item, index) => (
          <Checkbox key={index}>
            <input type="checkbox" id={`equipment-${index}`} />
            <label htmlFor={`equipment-${index}`}>{item.name}</label>
          </Checkbox>
        ))}
      </Equipment>
    </Details>
  );
}

const Details = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #dddddd;
  border-radius: 5px;
  height: 500px;
  overflow: auto;
`;

const Name = styled.h3`
  margin: 0;
`;

const Address = styled.p`
  margin: 0;
`;

const Tasks = styled.div`
  margin-top: 20px;
`;

const Equipment = styled.div`
  margin-top: 20px;
`;

const Title = styled.h4`
  margin: 0 0 10px 0;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;
