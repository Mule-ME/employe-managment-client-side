import {
  ActionWrapper,
  FormInputWrapper,
  FormWrapper,
  Title,
} from "../modals.style";
import Button from "../../button/button";
import FormInput from "../../formInput/formInput";
import Selector from "../../selector/selector";
type EditEmployeeFormProps = {
  show: boolean;
  // handleClick?: () => void;
};

const EditEmployeeForm = ({ show = false }: EditEmployeeFormProps) => {
  return (
    <FormWrapper show={show}>
      <Title>Edit Employee</Title>
      <FormInputWrapper>
        <FormInput
          inputType="text"
          placeholder="Name"
          parent="employeeForm"
          required={true}
          defaultValue="Mulualem Eshetu"
        />
        <FormInput
          inputType="email"
          placeholder="Email"
          parent="employeeForm"
          required={true}
          defaultValue="info@mulualem.com"
        />
        <Selector
          placeholder="Gender"
          onChange={() => {
            console.log("dsfs");
          }}
          required={true}
        />
        <FormInput
          inputType="date"
          placeholder=""
          parent="employeeForm"
          defaultValue="2022-01-31"
        />
        <FormInput
          inputType="number"
          placeholder="Salary"
          parent="employeeForm"
          required={true}
          defaultValue={32234242}
        />
      </FormInputWrapper>
      <ActionWrapper>
        <Button actionName="Cancel" />
        <Button actionName="Save" />
      </ActionWrapper>
    </FormWrapper>
  );
};

export default EditEmployeeForm;
