import { useEffect, useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../redux/action/employee";
import { employeeListSelector } from "../redux/selector/employee";
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
  const employee = useSelector(employeeListSelector);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  console.log(employee, "this is the response134");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getEmployees({
        page,
        limit: 6,
        search: "",
      })
    );
  }, [page]);

  useEffect(() => {
    dispatch(
      getEmployees({
        page: 1,
        limit: 6,
        search,
      })
    );
  }, [search]);

  const [showAddModal, setShowAddModal] = useState(false);

  const addModalHandler = () => {
    setShowAddModal(true);
  };

  const handlePageIncrement = () => {
    setPage(page + 1);
  };
  const handlePageDecrement = () => {
    setPage(page - 1);
  };
  //   const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();

  //   const button: HTMLButtonElement = event.currentTarget;
  //   setClickedButton(button.name);
  // };

  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };
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
          onChange={handleSelectChange}
        />
        <Button actionName="Add New" handleClick={() => addModalHandler()} />
      </ActionsWrapper>
      <CardContainer employees={employee} />
      <PaginationContainer>
        <PaginationButton
          actionName="left"
          handleClick={() => handlePageDecrement()}
        />
        <PaginationButton
          actionName="right"
          handleClick={() => handlePageIncrement()}
        />
      </PaginationContainer>
    </HomeDisplay>
  );
};

export default Home;
