import { useState } from "react";
import styled from "styled-components";
import IconButton from "../button/iconButton";
import EditEmployeeForm from "../modal/editEmployee/editEmployee";
import DeleteEmployeeForm from "../modal/deleteEmployee/deleteEmployee";
import { Employee } from "../../types";
import {
  ActionButtonsWrapper,
  Container,
  Label,
  LabelWrapper,
  Value,
  ValueWrapper,
} from "./card.style";
type CardProps = {
  employee: Employee;
};

const Card = (props: CardProps) => {
  const { name, email, gender, salary, dateOfBirth } = props?.employee;

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
      <EditEmployeeForm
        show={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        employee={props?.employee}
      />
      <DeleteEmployeeForm
        show={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        employee={props?.employee}
      />
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
        <Value>{name}</Value>
        <Value>{email}</Value>
        <Value>{gender}</Value>
        <Value>{salary?.toLocaleString()}</Value>
        <Value>{dateOfBirth?.toString().substring(0, 10)}</Value>
      </ValueWrapper>
      <ActionButtonsWrapper>
        <IconButton actionName="update" handleClick={updateModalHandler} />
        <IconButton actionName="delete" handleClick={deleteModalHandler} />
      </ActionButtonsWrapper>
    </Container>
  );
};

export default Card;
