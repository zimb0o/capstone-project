import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [formData, setFormData] = useState({
    Spotname: "",
    Address: [""],
    Tasks: [""],
    Equipment: [""],
  });

  const onChangeHandler = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData = value;
      return newFormData;
    });
  };
  const onDeleteTaskHandler = (index) => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Tasks.splice(index, 1);
      return newFormData;
    });
  };
  const onDeleteEquipmentHandler = (index) => {
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData };
      newFormData.Equipment.splice(index, 1);
      return newFormData;
    });
  };
  const onAddTaskHandler = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      Tasks: [...prevFormData.Tasks, ""],
    }));
  };
  const onAddEquipmentHandler = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      Equipment: [...prevFormData.Equipment, ""],
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <FormLabel htmlFor="SpotName">Spot Name:</FormLabel>
          <input
            type="text"
            name="Spotname"
            value={formData.Spotname}
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Address">Address:</FormLabel>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={(event) => onChangeHandler(event)}
          />
        </FormGroup>
        {formData.Tasks.map((tasks, index) => (
          <FormGroup key={index}>
            <FormLabel htmlFor={`Tasks${index}]`}>Tasks {index + 1}:</FormLabel>
            <input
              type="text"
              name={`Tasks[${index}]`}
              value={formData.Tasks[index]}
              onChange={(event) => onChangeHandler(event, index)}
            />
            <Button type="button" onClick={() => onDeleteTaskHandler(index)}>
              Delete
            </Button>
          </FormGroup>
        ))}
        {formData.Equipment.map((equipment, index) => (
          <FormGroup key={index}>
            <FormLabel htmlFor={`Equipment${index}]`}>
              Equipment {index + 1}:
            </FormLabel>
            <input
              type="text"
              name={`Equipment[${index}]`}
              value={formData.Equipment[index]}
              onChange={(event) => onChangeHandler(event, index)}
            />
            <Button
              type="button"
              onClick={() => onDeleteEquipmentHandler(index)}
            >
              Delete
            </Button>
          </FormGroup>
        ))}
        <FormGroup>
          <Button type="button" onClick={onAddTaskHandler}>
            + Task
          </Button>
          <Button type="button" onClick={onAddEquipmentHandler}>
            + Equipment
          </Button>
        </FormGroup>
        <FormGroup>
          <Button type="submit">Submit</Button>{" "}
        </FormGroup>
      </Form>
    </div>
  );
}

const Form = styled.form`
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border: radius 2px solid;
  display: flex;
  flex-direction: column;
`;
const FormLabel = styled.div`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: bold;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
const FormTask = styled.div`
  margin-bottom: 1rem;
`;
const Button = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 5px 10px;
  border-radius: 5px;
`;
