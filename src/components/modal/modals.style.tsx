import styled from "styled-components";

export const FormWrapper = styled.div<{
  show: boolean;
  isDeleteModal?: boolean;
}>`
  background-color: #ffffff;
  display: ${(props) => (props.show === true ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: ${(props) => (props?.isDeleteModal === true ? "28rem" : "24rem")};
  height: ${(props) => (props?.isDeleteModal === true ? "11rem" : "29rem")};
  border-radius: 0.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
`;
export const Title = styled.span<{
  isDeleteModal?: boolean;
}>`
  color: #c7d710;
  color:${(props) => (props?.isDeleteModal === true ? "#ff5252" : "#c7d710")}
  font-size: ${(props) => (props?.isDeleteModal === true ? "1.2rem" : "1.4rem")}
  font-weight: bold;
  margin-bottom: ${(props) =>
    props?.isDeleteModal === true ? "1rem" : " 0.7rem"};
  // font-family: "Open Sans sans-serif";

`;

export const FormInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
