import styled from "styled-components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CustomIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2174c9;
  color: #ffffff;
  border: none;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  &:hover {
    background-color: #2d8ae9;
  }
`;

type ButtonAction = {
  actionName: string;
  handleClick?: () => void;
};

const IconButton = ({ actionName, handleClick }: ButtonAction) => {
  return (
    <CustomIconButton onClick={handleClick}>
      {actionName === "update" ? (
        <EditOutlinedIcon />
      ) : (
        <DeleteOutlineOutlinedIcon />
      )}
    </CustomIconButton>
  );
};

export default IconButton;
