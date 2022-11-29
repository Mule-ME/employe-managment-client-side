import {
  ActionWrapper,
  FormInputWrapper,
  FormWrapper,
  Title,
} from "../modals.style";
import Button from "../../button/button";
import FormInput from "../../formInput/formInput";
import Selector from "../../selector/selector";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../redux/action/employee";

type AddEmployeeFormProps = {
  show: boolean;
  setShowAddModal: (show: boolean) => void;
};
const AddEmployeeForm = ({
  show = false,
  setShowAddModal,
}: AddEmployeeFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [salary, setSalary] = useState<number | undefined>(undefined);
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
      <Title>Add Employee</Title>
      <FormInputWrapper>
        <FormInput
          inputType="text"
          placeholder="Name"
          parent="employeeForm"
          onChange={handleInputChange("name")}
          required={true}
        />
        <FormInput
          inputType="email"
          placeholder="Email"
          parent="employeeForm"
          onChange={handleInputChange("email")}
          required={true}
        />
        <Selector
          placeholder="Gender"
          onChange={handleSelectChange}
          required={true}
        />
        <FormInput
          inputType="date"
          placeholder=""
          parent="employeeForm"
          onChange={handleInputChange("dob")}
        />
        <FormInput
          inputType="number"
          placeholder="Salary"
          parent="employeeForm"
          required={true}
          onChange={handleInputChange("salary")}
        />
      </FormInputWrapper>
      <ActionWrapper>
        <Button
          actionName="Cancel"
          handleClick={() => setShowAddModal(false)}
        />
        <Button
          actionName="Save"
          handleClick={() => {
            dispatch(
              addEmployee({
                name,
                email,
                gender,
                salary,
                dateOfBirth,
              })
            );
            setShowAddModal(false);
          }}
          // type="submit"
        />
      </ActionWrapper>
    </FormWrapper>
  );
};

export default AddEmployeeForm;
