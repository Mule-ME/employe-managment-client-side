import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const CustomIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2174c9;
  color: #ffffff;
  border: none;
  height: 2rem;
  width: 2rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: #2d8ae9;
  }
`;

type ButtonAction = {
  actionName: string;
  handleClick?: () => void;
};

const PaginationButton = ({ actionName, handleClick }: ButtonAction) => {
  return (
    <CustomIconButton onClick={handleClick}>
      {actionName === "left" ? (
        <KeyboardArrowLeftIcon fontSize="large" />
      ) : (
        <KeyboardArrowRightIcon fontSize="large" />
      )}
    </CustomIconButton>
  );
};

export default PaginationButton;
