import { useState } from "react";
import styled from "styled-components";
import IconButton from "../button/iconButton";
import EditEmployeeForm from "../modal/editEmployee/editEmployee";
import DeleteEmployeeForm from "../modal/deleteEmployee/deleteEmployee";
import {
  ActionButtonsWrapper,
  Container,
  Label,
  LabelWrapper,
  Value,
  ValueWrapper,
} from "./card.style";
type CardProps = {
  handleClick: () => void;
};

const Card = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const ModalOverlay = styled.div`
    display: ${showDeleteModal === true
      ? "block"
      : showUpdateModal === true
      ? "block"
      : "none"};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 5;
  `;

  const deleteModalHandler = () => {
    setShowDeleteModal(true);
  };
  const updateModalHandler = () => {
    setShowUpdateModal(true);
  };

  const labels = [
    { id: 1, value: "Name" },
    { id: 2, value: "Email" },
    { id: 3, value: "Gender" },
    { id: 4, value: "Salary" },
    { id: 5, value: "DoB" },
  ];
  return (
    <Container>
      <EditEmployeeForm show={showUpdateModal} />
      <DeleteEmployeeForm show={showDeleteModal} />
      <ModalOverlay
        onClick={(e) =>
          showDeleteModal === true
            ? setShowDeleteModal(false)
            : setShowUpdateModal(false)
        }
      />
      <LabelWrapper>
        {labels?.map((label) => (
          <Label key={label?.id}>{label.value}</Label>
        ))}
      </LabelWrapper>
      <ValueWrapper>
        <Value>Mulualem Eshetu</Value>
        <Value>info@mulualem.com</Value>
        <Value>Male</Value>
        <Value>21,533</Value>
        <Value>15-12-1990</Value>
      </ValueWrapper>
      <ActionButtonsWrapper>
        <IconButton actionName="update" handleClick={updateModalHandler} />
        <IconButton actionName="delete" handleClick={deleteModalHandler} />
      </ActionButtonsWrapper>
    </Container>
  );
};

export default Card;
