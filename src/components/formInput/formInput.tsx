import { ChangeEvent } from "react";
import { Input } from "./formInput.style";
type InputProps = {
  inputType: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  parent: string;
  required?: boolean;
  defaultValue?: string | number;
};

const FormInput = ({
  inputType,
  placeholder,
  onChange,
  parent,
  required,
  defaultValue,
}: InputProps) => {
  return (
    <Input
      parent={parent}
      placeholder={placeholder}
      type={inputType}
      required={required}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default FormInput;
