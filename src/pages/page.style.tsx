import styled from "styled-components";
import loginBackground from "../assets/loginBackground.png";

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to right,
      rgba(36, 205, 200, 0.4),
      rgba(36, 205, 200, 0.4)
    ),
    url(${loginBackground});
`;

export const HomeDisplay = styled.div`
  postilion: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
`;
export const ActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 0 1rem 50.6rem;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  top: 80%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  margin-left: 66.5rem;
`;

export const ModalOverlay = styled.div<{
  showModal: boolean;
  showDeleteModal?: boolean;
}>`
  display: ${(props) => (props.showModal === true ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 5;
`;

export const AccountButton = styled.button`
  position: absolute;
  top: 1%;
  left: 84.6%;
  justify-content: flex-end;
  display: flex;
  justify-content: center;
  background-color: #ffff;
  border: 1px solid #2174c9;
  color: #2174c9;
  height: 1.6rem;
  width: 7rem;
  font-size: 1.2rem;
  font-weight: light;
  border-radius: 0.5rem;
  &:hover {
    background-color: #ececec;
  }
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;
