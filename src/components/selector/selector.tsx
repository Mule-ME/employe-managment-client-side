import { ChangeEvent } from "react";
import { Select } from "./selector.style";
type SelectProps = {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const values = [
  {
    id: 1,
    value: "Male",
  },
  {
    id: 1,
    value: "Female",
  },
];

const Selector = ({ placeholder, onChange, required }: SelectProps) => {
  return (
    <Select name="gender" id="gender" required>
      <option value={placeholder}>{placeholder}</option>
      {values.map((gender) => (
        <option key={gender.id} value={gender.value}>
          {gender.value}
        </option>
      ))}
    </Select>
  );
};

export default Selector;
