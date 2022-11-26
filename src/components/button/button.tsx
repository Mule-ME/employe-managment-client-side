import styled from "styled-components";
import { ChangeEvent, ChangeEventHandler } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type ButtonProps = {
  actionName: string;
  handleClick?: () => void;
};

// const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//   event.preventDefault();

//   const button: HTMLButtonElement = event.currentTarget;
//   setClickedButton(button.name);
// };

const Button = ({ actionName, handleClick }: ButtonProps) => {
  const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${actionName === "Login"
      ? "20.1rem"
      : actionName === "Add New"
      ? "8rem"
      : "6rem"};
    height: ${actionName === "Add New" ? "2rem" : "2.4rem"};
    border: none;
    background-color: ${actionName === "Cancel" ? "#ffffff" : "#2174c9"};
    color: ${actionName === "Cancel" ? "#2174c9" : "#ffffff"};
    font-weight: 450;
    font-size: 1.1rem;
    border-radius: 1.2rem;
    &:hover {
      background-color: ${actionName === "Cancel" ? "#ececec" : "#2d8ae9"};
    }
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2);
  `;
  const AddIconWrapper = styled.div`
    padding-right: 0.3rem;
    padding-top: 0.4rem;
  `;
  return (
    <CustomButton onClick={handleClick}>
      {actionName === "Add New" ? (
        <AddIconWrapper>
          <AddCircleOutlineIcon />
        </AddIconWrapper>
      ) : (
        <></>
      )}
      {actionName}
    </CustomButton>
  );
};

export default Button;
