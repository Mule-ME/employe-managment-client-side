import { useState } from "react";
import styled from "styled-components";
import AddEmployeeForm from "../components/addEmployeeForm/addEmployeeForm";
import Button from "../components/button/button";
import CardContainer from "../components/cardContainer/cardContainer";
import FormInput from "../components/formInput/formInput";
import PaginationButton from "../components/paginationButton/paginationButton";

const HomeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0;
`;
const ActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 0 1rem 49rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  margin-left: 66.5rem;
`;

const Home = () => {
  const [showProjectFormModal, toggelProjectFormModal] = useState(false);

  const toggleProjectFormHandler = () => {
    toggelProjectFormModal(!showProjectFormModal);
  };

  const [show, setShow] = useState(false);
  const handleAddEmployee = () => {
    setShow(true);
  };

  //   const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();

  //   const button: HTMLButtonElement = event.currentTarget;
  //   setClickedButton(button.name);
  // };

  console.log(show, "show status");
  return (
    <HomeDisplay>
      <ActionsWrapper>
        <FormInput inputType="search" placeholder="Search..." parent="search" />
        <Button actionName="Add New" handleClick={() => handleAddEmployee()} />
      </ActionsWrapper>
      <CardContainer />
      <PaginationContainer>
        <PaginationButton actionName="left" />
        <PaginationButton actionName="right" />
      </PaginationContainer>
      {/* 
      < show={showProjectFormModal}
        handleProjectModal={toggleProjectFormHandler}> */}
      {/* show = false,
  handleProjectModal, */}
      {/* handleProjectModal(false); */}
    </HomeDisplay>
  );
};

export default Home;
