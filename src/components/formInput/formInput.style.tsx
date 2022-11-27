import styled from "styled-components";

export const Input = styled.input<{ parent: string }>`
  width: ${(props) =>
    props.parent === "search"
      ? "13.5rem"
      : (props) =>
          props.parent === "login"
            ? "19rem"
            : (props) => (props.parent === "employeeForm" ? "15rem" : "")};
  height: 2rem;
  color: #c7d710;
  border: 1px solid #606060;
  font-size: 1rem;
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
