import { useEffect, useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../redux/action/employee";
import { employeeListSelector } from "../redux/selector/employee";
import {
  ActionsWrapper,
  HomeDisplay,
  PaginationContainer,
  ModalOverlay,
  AccountButton,
} from "./page.style";
import AddEmployeeForm from "../components/modal/addEmployee/addEmployee";
import Button from "../components/button/button";
import CardContainer from "../components/cardContainer/cardContainer";
import FormInput from "../components/formInput/formInput";
import PaginationButton from "../components/paginationButton/paginationButton";
import LogoutCard from "../components/logout/logoutCard";

const Home = () => {
  const employee = useSelector(employeeListSelector);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [clickCounter, setClickCounter] = useState(1);

  const addModalHandler = () => {
    setShowAddModal(true);
  };

  const accountModalHandler = () => {
    setClickCounter(clickCounter + 1);
    if (clickCounter === 1) {
      setShowAccount(true);
      setClickCounter(clickCounter - 1);
    } else {
      setShowAccount(false);
    }
  };

  console.log(employee,"total employees")
  //Requesting users list with out search
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

  //Requesting users list with search
  useEffect(() => {
    dispatch(
      getEmployees({
        page: 1,
        limit: 6,
        search,
      })
    );
  }, [search]);

  const handlePageIncrement = () => {
    setPage(page + 1);
  };
  const handlePageDecrement = () => {
    setPage(page - 1);
  };
  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };
  return (
    <HomeDisplay>
      <AccountButton onClick={accountModalHandler}>Account</AccountButton>
      <LogoutCard showAccount={showAccount} />
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
