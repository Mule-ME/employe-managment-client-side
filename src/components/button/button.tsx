import { AddIconWrapper, CustomButton } from "./button.style";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type ButtonProps = {
  actionName: string;
  handleClick?: () => void;
};

const Button = ({ actionName, handleClick }: ButtonProps) => {
  return (
    <CustomButton actionName={actionName} onClick={handleClick}>
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
