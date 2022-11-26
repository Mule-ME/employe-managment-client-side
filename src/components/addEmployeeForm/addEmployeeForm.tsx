import styled from "styled-components";
import Button from "../button/button";
import FormInput from "../formInput/formInput";
import Selector from "../selector/selector";
type AddEmployeeFormProps = {
  show: boolean;
  // handleClick?: () => void;
};
const AddEmployeeForm = ({ show = false }: AddEmployeeFormProps) => {
  const FormWrapper = styled.div`
    // width: 100%;
    // height: 100%;
    // background-color: #909090;
    // opacity: 0.1;
    background-color: #ffffff;
    display: ${show === true ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 24rem;
    height: 29rem;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3), 0 3px 10px 0 rgba(0, 0, 0, 0.6);
    text-align: center;
    border-radius: 1rem;
    &:hover {
      // 3box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `;
  const Title = styled.span`
    color: #c7d710;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
  `;

  const FormInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 1rem;
  `;

  const ActionWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
  `;

  return (
    <FormWrapper>
      <Title>Add Employee</Title>
      <FormInputWrapper>
        <FormInput
          inputType="text"
          placeholder="Enter Name"
          parent="employeeForm"
          required={true}
        />
        <FormInput
          inputType="email"
          placeholder="Enter Email"
          parent="employeeForm"
          required={true}
        />
        <Selector
          placeholder="Select Gender"
          onChange={() => {
            console.log("dsfs");
          }}
          required={true}
        />
        <FormInput inputType="date" placeholder="" parent="employeeForm" />
        <FormInput
          inputType="number"
          placeholder="Enter salary"
          parent="employeeForm"
          required={true}
        />
      </FormInputWrapper>
      <ActionWrapper>
        <Button actionName="Cancel" />
        <Button actionName="Save" />
      </ActionWrapper>
    </FormWrapper>
  );
};

export default AddEmployeeForm;
