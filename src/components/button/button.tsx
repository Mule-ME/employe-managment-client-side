import { AddIconWrapper, CustomButton } from "./button.style";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type ButtonProps = {
  actionName: string;
  handleClick?: () => void;
  type?: string;
};

const Button = ({ actionName, handleClick, type }: ButtonProps) => {
  return (
    <CustomButton
      actionName={actionName}
      onClick={handleClick}
      // type={type === "submit" ? "submit" : "button"}
    >
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
