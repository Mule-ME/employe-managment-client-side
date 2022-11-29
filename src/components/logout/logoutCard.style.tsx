import styled from "styled-components";

export const LogoutCardContainer = styled.div<{ showAccount: boolean }>`
  display: ${(props) => (props.showAccount === true ? "flex" : "none")};
  flex-direction: column;
  background-color: #fff;
  width: 11rem;
  height: 5.9rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 5%;
  left: 79.9%;
  border-radius: 0.5rem;
`;

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11rem;
  height: 2rem;
  border: none;
  margin-top: 0.1rem;
  background-color: #ffff;
  color: #2174c9;
  font-weight: 450;
  font-size: 1.1rem;
  &:hover {
    background-color: #ececec;
  }
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.1);
`;
