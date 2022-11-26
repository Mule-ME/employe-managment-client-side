import styled from "styled-components";

type InputProps = {
  inputType: string;
  placeholder: string;
  onChange?: () => void;
  parent: string;
  required?: boolean;
};
const FormInput = ({
  inputType,
  placeholder,
  onChange,
  parent,
  required,
}: InputProps) => {
  const Input = styled.input`
    width: ${parent === "search"
      ? "13.5rem"
      : parent === "login"
      ? "19rem"
      : parent === "employeeForm"
      ? "15rem"
      : ""};
    height: 2rem;
    color: #c7d710;
    border: 1px solid #606060;
    font-size: 1.2rem;
    text-align: left;
    border-radius: 20px;
    ::placeholder {
      color: #909090;
    }

    ,
    &:active {
      border: 1px solid #606060;
      outline: none;
    }
    &:focus {
      border: 1px solid #2174c9;
      outline: none;
    }
    padding-left: 15px;
  `;

  return <Input placeholder={placeholder} type={inputType} required />;
};

export default FormInput;
