import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { formTaskOptions } from "../helpers/formTaskOptions";
import { formEquipmentOptions } from "../helpers/formEquipmentOptions";
export default function SpotForm() {
  const [formData, setFormData] = useState({
    Spotname: "",
    Address: "",
    Tasks: [],
    Equipment: [],
  });
  const history = useHistory();
  const handleOptionToggle = (option, field) => {
    setFormData((prevFormData) => {
      const selectedOptions = prevFormData[field];

      if (selectedOptions.includes(option)) {
        return {
          ...prevFormData,
          [field]: selectedOptions.filter(
            (selectedOption) => selectedOption !== option
          ),
        };
      } else {
        return {
          ...prevFormData,
          [field]: [...selectedOptions, option],
        };
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    history.push({
      pathname: "/spots",
      state: { formData },
    });
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
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInputLabel htmlFor="Address">Address:</FormInputLabel>
          <FormInput
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInputLabel htmlFor="Tasks">Tasks:</FormInputLabel>
          {formTaskOptions.map((option) => (
            <FormLabel key={option}>
              <FormInput
                type="checkbox"
                checked={formData.Tasks.includes(option)}
                onChange={() => handleOptionToggle(option, "Tasks")}
              />
              {option}
            </FormLabel>
          ))}
        </FormGroup>
        <FormGroup>
          <FormInputLabel htmlFor="Equipment">Equipment:</FormInputLabel>
          {formEquipmentOptions?.map((option) => (
            <FormLabel key={option}>
              <FormInput
                type="checkbox"
                checked={formData.Equipment.includes(option)}
                onChange={() => handleOptionToggle(option, "Equipment")}
              />
              {option}
            </FormLabel>
          ))}
        </FormGroup>
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
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

const FormInputLabel = styled.label`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: bold;
`;

const FormInput = styled.input`
  border-radius: 1px;
  border: 0.5px solid;
`;

const FormGroup = styled.div`
  margin-bottom: 1 rem;
  border: 0.5px solid;
  border-radius: 0.5px;
`;

const Button = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 5px 10px;
  border-radius: 5px;
`;

const FormLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TaskOptions = styled.div`
  border: 1px solid;
`;
