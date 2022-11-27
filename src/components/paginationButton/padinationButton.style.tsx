import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const CustomIconButton = styled.button`
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

export const ButtonIcon = styled(KeyboardArrowLeftIcon)<{ location?: string }>`
  transform: ${(props) =>
    props.location === "left" ? "rotate(0deg)" : "rotate(180deg)"};
`;
