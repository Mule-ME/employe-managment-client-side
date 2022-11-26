import styled from "styled-components";
type SelectProps = {
  placeholder: string;
  onChange?: () => void;
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
  const Select = styled.select`
    width: 16rem;
    height: 2rem;
    color:  #c7d710};
    border: 1px solid #606060;
    font-size: 1.2rem;
    text-align: left;
    border-radius: 20px;
    padding-left: 15px;
  `;

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
