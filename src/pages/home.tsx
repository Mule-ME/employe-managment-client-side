import { useEffect, useState } from "react";
import { employee } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../redux/action/employee";
import { employeeSelector } from "../redux/selector/employee";
import {
  ActionsWrapper,
  HomeDisplay,
  PaginationContainer,
  ModalOverlay,
} from "./page.style";
import AddEmployeeForm from "../components/modal/addEmployee/addEmployee";
import Button from "../components/button/button";
import CardContainer from "../components/cardContainer/cardContainer";
import FormInput from "../components/formInput/formInput";
import PaginationButton from "../components/paginationButton/paginationButton";

const Home = () => {
  const employee = useSelector(employeeSelector);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // console.log(employee);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getEmployees({
        page,
        limit: 2,
        search: "",
      })
    );
  }, [page]);

  // useEffect(() => {
  //   dispatch(
  //     getEmployees({
  //       page: 1,
  //       limit: 6,
  //       search,
  //     })
  //   );
  // }, [search]);

  const [showAddModal, setShowAddModal] = useState(false);

  const addModalHandler = () => {
    setShowAddModal(true);
  };

  //   const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();

  //   const button: HTMLButtonElement = event.currentTarget;
  //   setClickedButton(button.name);
  // };

  return (
    <HomeDisplay>
      <AddEmployeeForm show={showAddModal} setShowAddModal={setShowAddModal} />

      <ModalOverlay
        showModal={showAddModal}
        onClick={(e) => setShowAddModal(false)}
      />
      <ActionsWrapper>
        <FormInput
          inputType="search"
          placeholder="Search..."
          parent="search"
          // onChange={}
        />
        <Button actionName="Add New" handleClick={() => addModalHandler()} />
      </ActionsWrapper>
      <CardContainer
      // employee={employee} s
      />
      <PaginationContainer>
        <PaginationButton actionName="left" />
        <PaginationButton actionName="right" />
      </PaginationContainer>
    </HomeDisplay>
  );
};

export default Home;
