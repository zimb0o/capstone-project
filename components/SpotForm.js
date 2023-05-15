import { useState } from "react";
import styled from "styled-components";

export default function SpotForm() {
  const [formData, setFormData] = useState({
    Spotname: "",
    Address: "",
    Tasks: [""],
    Equipment: [""],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
      newFormData.Equipment.splice(index, 0.5);
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
    const formData = event.target.value(index);
    const data = Object.fromEntries(formData);
    console.log(data);
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
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Address">Address:</FormLabel>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        {formData.Tasks.map((index) => (
          <FormSelect key={index}>
            <FormLabel htmlFor={`Tasks${index}]`}>Tasks {index}:</FormLabel>
            <input
              type="text"
              name={`Tasks[${index}]`}
              value={formData.Tasks[index]}
              onChange={(event) => handleChange(event, index)}
            />
            <Button type="button" onClick={() => onDeleteTaskHandler(index)}>
              Delete
            </Button>
          </FormSelect>
        ))}
        {formData.Equipment.map((index) => (
          <FormSelect key={index}>
            <FormLabel htmlFor={`Equipment${index}]`}>
              Equipment {index + 1}:
            </FormLabel>
            <input
              type="text"
              name={`Equipment[${index}]`}
              value={formData.Equipment[index]}
              onChange={(event) => handleChange(event, index)}
            />
            <Button type="button" onClick={() => onDeleteEquipmentHandler()}>
              Delete
            </Button>
          </FormSelect>
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
const FormSelect = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 5px 10px;
  border-radius: 5px;
`;
