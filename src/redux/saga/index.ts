import * as Effects from "redux-saga/effects";
import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../actionType/employee";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "./employee";
import { loginUser } from "./user";
import { LOGIN_USER } from "../actionType/user";

export function* rootSaga() {
  const takeLatest: any = Effects.takeLatest;

  yield takeLatest(GET_EMPLOYEES, getEmployees);
  yield takeLatest(ADD_EMPLOYEE, addEmployee);
  yield takeLatest(UPDATE_EMPLOYEE, updateEmployee);
  yield takeLatest(DELETE_EMPLOYEE, deleteEmployee);

  yield takeLatest(LOGIN_USER, loginUser);
}
