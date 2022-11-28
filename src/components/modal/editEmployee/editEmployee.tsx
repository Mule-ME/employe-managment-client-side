import {
  ActionWrapper,
  FormInputWrapper,
  FormWrapper,
  Title,
} from "../modals.style";
import Button from "../../button/button";
import FormInput from "../../formInput/formInput";
import Selector from "../../selector/selector";
import { Employee } from "../../../types";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../../redux/action/employee";

type EditEmployeeFormProps = {
  show: boolean;
  setShowUpdateModal: (show: boolean) => void;
  employee: Employee;
};

const EditEmployeeForm = ({
  show = false,
  setShowUpdateModal,
  employee: { name, email, gender, salary, dateOfBirth, _id },
}: EditEmployeeFormProps) => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("submit", e);
  // };

  const [updatedName, setName] = useState("");
  const [updatedEmail, setEmail] = useState("");
  const [UpdatedGender, setGender] = useState("");
  const [UpdatedDateOfBirth, setDateOfBirth] = useState<Date | undefined>(
    undefined
  );
  const [updatedSalary, setSalary] = useState<number | undefined>(undefined);

  const dispatch = useDispatch();

  const handleInputChange =
    (type: String) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      switch (type) {
        case "name":
          setName(value);
          break;
        case "email":
          setEmail(value);
          break;

        case "dob":
          setDateOfBirth(new Date(Date.parse(value)));
          break;
        case "salary":
          setSalary(parseInt(value, 10));
          break;
      }
    };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setGender(value);
  };

  return (
    <FormWrapper show={show}>
      <Title>Edit Employee</Title>
      <FormInputWrapper>
        <FormInput
          inputType="text"
          placeholder="Name"
          parent="employeeForm"
          required={true}
          defaultValue={name}
          onChange={handleInputChange("name")}
        />
        <FormInput
          inputType="email"
          placeholder="Email"
          parent="employeeForm"
          required={true}
          defaultValue={email}
          onChange={handleInputChange("email")}
        />
        <Selector
          placeholder="Gender"
          onChange={handleSelectChange}
          required={true}
          defaultValue={gender}
        />
        <FormInput
          inputType="date"
          placeholder=""
          parent="employeeForm"
          defaultValue={dateOfBirth?.toString().substring(0, 10)}
          onChange={handleInputChange("dateOfBirth")}
        />
        <FormInput
          inputType="number"
          placeholder="Salary"
          parent="employeeForm"
          required={true}
          defaultValue={salary}
          onChange={handleInputChange("salary")}
        />
      </FormInputWrapper>
      <ActionWrapper>
        {/* <Button actionName="Cancel" type="submit" />
         */}
        <Button
          actionName="Cancel"
          handleClick={() => setShowUpdateModal(false)}
        />
        <Button
          actionName="Save"
          handleClick={() => {
            dispatch(
              updateEmployee({
                _id,
                name: updatedName,
                email: updatedEmail,
                gender: UpdatedGender,
                salary: updatedSalary,
                dateOfBirth: UpdatedDateOfBirth,
              })
            );
            setShowUpdateModal(false);
          }}
        />
      </ActionWrapper>
    </FormWrapper>
  );
};

export default EditEmployeeForm;
