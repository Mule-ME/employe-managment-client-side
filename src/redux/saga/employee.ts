import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../actionType/employee";
import {
  deletedEmployee,
  employeeAdded,
  updatedEmployee,
} from "../action/employee";
import {
  AddEmployeeResponse,
  DeleteEmployeeResponse,
  Employee,
  GetEmployeeResponse,
  UpdateEmployeeResponse,
} from "../../types/index";

import { put } from "@redux-saga/core/effects";
import axios from "axios";
import * as Effects from "redux-saga/effects";
import { GetEmployeePayload } from "../../types";
import { gotEmployee } from "../action/employee";
import { GET_EMPLOYEES } from "../actionType/employee";

const baseUrl = "http://localhost:5000/api/v1";

const headers = {
  accept: "Application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export function* getEmployees(query: GetEmployeePayload) {
  try {
    const response: GetEmployeeResponse = yield axios.get<Employee>(
      `${baseUrl}/user`,
      {
        method: "GET",
        params: {
          query,
        },
        headers,
      }
    );
    yield put(gotEmployee(response));
  } catch (e) {
    yield put(gotEmployee({ success: false }));
  }
}

export function* addEmployee(employee: Employee) {
  try {
    const response: AddEmployeeResponse = yield axios.post<AddEmployeeResponse>(
      `${baseUrl}/user`,
      {
        method: "GET",
        params: {
          body: employee,
        },
        headers,
      }
    );
    yield put(employeeAdded(response));
  } catch (e) {
    yield put(employeeAdded({ success: false }));
  }
}

export function* updateEmployee(employee: Employee) {
  try {
    const response: UpdateEmployeeResponse =
      yield axios.patch<UpdateEmployeeResponse>(
        `${baseUrl}/user/${employee._id}`,
        {
          method: "PATCH",
          params: {
            body: employee,
          },
          headers,
        }
      );
    yield put(updatedEmployee(response));
  } catch (e) {
    yield put(updatedEmployee({ success: false }));
  }
}

export function* deleteEmployee(employee: Employee) {
  try {
    const response: DeleteEmployeeResponse =
      yield axios.delete<DeleteEmployeeResponse>(
        `${baseUrl}/user/${employee._id}}`,
        {
          method: "DELETE",
          params: {
            body: employee,
          },
          headers,
        }
      );
    yield put(deletedEmployee(response));
  } catch (e) {
    yield put(deletedEmployee({ success: false }));
  }
}
