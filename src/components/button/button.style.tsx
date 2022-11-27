import styled from "styled-components";

export const CustomIconButton = styled.button<{ actionName: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.actionName === "delete" ? "#ff5252" : "#2174c9"};
  color: #ffffff;
  border: none;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  &:hover {
    background-color: ${(props) =>
      props.actionName === "delete" ? "#ff5969" : "#2d8ae9"};
  }
`;
export const CustomButton = styled.button<{ actionName: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.actionName === "Login"
      ? "20.1rem"
      : (props) => (props.actionName === "Add New" ? "8rem" : "7rem")};
  height: ${(props) => (props.actionName === "Add New" ? "2rem" : "2.4rem")};
  border: none;
  background-color: ${(props) =>
    props.actionName === "Cancel"
      ? "#ffffff"
      : (props) => (props.actionName === "Delete" ? "#ff5252" : "#2174c9")};
  color: ${(props) => (props.actionName === "Cancel" ? "#606060" : "#ffffff")};
  font-weight: 450;
  font-size: 1.1rem;
  border-radius: 1.2rem;
  &:hover {
    background-color: ${(props) =>
      props.actionName === "Cancel"
        ? "#fafafa"
        : (props) => (props.actionName === "Delete" ? "#ff5969" : "#2d8ae9")};
  }
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2);
`;
export const AddIconWrapper = styled.div`
  padding-right: 0.3rem;
  padding-top: 0.4rem;
`;
