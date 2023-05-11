import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [formData, setFormData] = useState({
    Spotname: "",
    Address: "",
    Übungen: [],
    Trainingsgeräte: [],
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <FormGroup>
          <FormLabel htmlFor="SpotName" className="form-label">
            Spot Name:
          </FormLabel>
          <input
            className="form-control"
            type="text"
            name="Spotname"
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Address" className="form-label">
            Address:
          </FormLabel>
          <input
            className="form-control"
            type="text"
            name="Address"
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormTasks>
          <FormLabel htmlFor="Übungen" className="form-label">
            Übungen:
          </FormLabel>
          <FormCheckbox>
            <input
              type="checkbox"
              name="Übungen"
              value="push up"
              onChange={onChangeHandler}
            />
            <label htmlFor="push up">Push up</label>
          </FormCheckbox>
        </FormTasks>
        <FormTasks>
          <FormLabel htmlFor="Trainingsgeräte" className="form-label">
            Trainingsgeräte:
          </FormLabel>
          <FormCheckbox>
            <input
              type="checkbox"
              name="Trainingsgeräte"
              value="pull up bar"
              onChange={onChangeHandler}
            />
            <label htmlFor="pull up bar">Pull up bar</label>
          </FormCheckbox>
        </FormTasks>
        <FormGroup>
          <Button className="btn" type="submit">
            Submit
          </Button>{" "}
        </FormGroup>
      </form>
    </div>
  );
}

const FormLabel = styled.div`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: bold;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormTasks = styled.div`
  border: 1px solid;
`;

const FormCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 5px 10px;
  border-radius: 5px;
`;
