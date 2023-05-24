import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { formTaskOptions } from "../helpers/formTaskOptions";
import { formEquipmentOptions } from "../helpers/formEquipmentOptions";
import { v4 as uuidv4 } from "uuid";

export default function SpotForm({ addSpot }) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    address: "",
    tasks: [],
    equipment: [],
  });

  const router = useRouter();

  const handleOptionToggle = (option, field) => {
    setFormData((prevFormData) => {
      const selectedOptions = prevFormData[field];

      if (selectedOptions?.includes(option)) {
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
    const newSpot = {
      id: uuidv4(),
      name: formData.name,
      address: formData.address,
      tasks: formData.tasks,
      equipment: formData.equipment,
    };

    addSpot(newSpot);
    setFormData({
      id: Date.now(),
      name: "",
      address: "",
      tasks: [],
      equipment: [],
    });
    console.log(formData);
    router.push("/spots");
  };

  return (
    <FormSection>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup>
          <FormInputLabel htmlFor="Name">Spot Name:</FormInputLabel>
          <FormInput
            type="text"
            name="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInputLabel htmlFor="Address">Address:</FormInputLabel>
          <FormInput
            type="text"
            name="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormGroup>
        <fieldset key={uuidv4()}>
          <legend>Tasks:</legend>
          {formTaskOptions.map((task) => (
            <FormLabel key={task}>
              <FormInput
                type="checkbox"
                checked={formData.tasks.includes(task)}
                onChange={() => handleOptionToggle(task, "Tasks")}
              />
              {task}
            </FormLabel>
          ))}
        </fieldset>
        <fieldset key={uuidv4()}>
          <legend>Equipment:</legend>
          {formEquipmentOptions?.map((equipment) => (
            <FormLabel key={equipment}>
              <FormInput
                type="checkbox"
                checked={formData.equipment.includes(equipment)}
                onChange={() => handleOptionToggle(equipment, "Equipment")}
              />
              {equipment}
            </FormLabel>
          ))}
        </fieldset>
        <Button type="submit">Submit</Button>
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
  position: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
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
