import { useState } from "react";
import styled from "styled-components";
import { formTaskOptions } from "../helpers/formTaskOptions.js";
export default function SpotForm() {
  const [formData, setFormData] = useState({
    Spotname: "",
    Address: "",
    Tasks: [""],
    Equipment: [""],
  });

  const handleChange = (event) => {
    const { name, tasks, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(typeof formData);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <FormSection>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <FormInputLabel htmlFor="SpotName">Spot Name:</FormInputLabel>
          <FormInput
            type="text"
            name="Spotname"
            value={formData.Spotname}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormInputLabel htmlFor="Address">Address:</FormInputLabel>
          <FormInput
            type="text"
            name="Address"
            value={formData.Address}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormInputLabel htmlFor="Tasks">Tasks:</FormInputLabel>
        {formTaskOptions?.map((tasks, index) => (
          <FormInput
            key={index}
            type="checkbox"
            name="Tasks"
            value={tasks}
            checked={formData.Tasks.includes(task)}
            onChange={handleChange}
          />
        ))}
        <Button type="submit">Submit</Button>{" "}
      </Form>
    </FormSection>
  );
}
const FormSection = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
`;
const Form = styled.form`
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border: radius 2px solid;
  display: flex;
  flex-direction: column;
`;
const FormInputLabel = styled.div`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: bold;
`;
const FormInput = styled.input`
  border-radius: 1px;
  border: 0.5px solid;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 5px 10px;
  border-radius: 5px;
`;
