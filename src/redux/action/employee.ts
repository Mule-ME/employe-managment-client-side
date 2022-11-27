import {
  DeleteEmployeeResponse,
  UpdateEmployeeResponse,
} from "./../../types/index";
import {
  ADD_EMPLOYEE,
  EMPLOYEE_ADDED,
  GOT_EMPLOYEES,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  EMPLOYEE_UPDATED,
  DELETE_EMPLOYEE,
  EMPLOYEE_DELETED,
} from "../actionType/employee";
import {
  AddEmployeeResponse,
  Employee,
  GetEmployeePayload,
  GetEmployeeResponse,
} from "../../types";

export const addEmployee = (employee: Employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const employeeAdded = (response: AddEmployeeResponse) => ({
  type: EMPLOYEE_ADDED,
  payload: response,
});

export const getEmployees = (query: GetEmployeePayload) => ({
  type: GET_EMPLOYEES,
  payload: query,
});

export const gotEmployee = (response: GetEmployeeResponse) => ({
  type: GOT_EMPLOYEES,
  payload: response,
});

export const updateEmployee = (employee: Employee) => ({
  type: UPDATE_EMPLOYEE,
  payload: employee,
});

export const updatedEmployee = (response: UpdateEmployeeResponse) => ({
  type: EMPLOYEE_UPDATED,
  payload: response,
});

export const deleteEmployee = (employee: Employee) => ({
  type: DELETE_EMPLOYEE,
  payload: employee,
});

export const deletedEmployee = (response: DeleteEmployeeResponse) => ({
  type: EMPLOYEE_DELETED,
  payload: response,
});
