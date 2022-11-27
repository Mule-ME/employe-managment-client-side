import { CustomIconButton } from "./button.style";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

type ButtonAction = {
  actionName: string;
  handleClick?: () => void;
};

const IconButton = ({ actionName, handleClick }: ButtonAction) => {
  return (
    <CustomIconButton actionName={actionName} onClick={handleClick}>
      {actionName === "update" ? (
        <EditOutlinedIcon />
      ) : (
        <DeleteOutlineOutlinedIcon />
      )}
    </CustomIconButton>
  );
};

export default IconButton;
