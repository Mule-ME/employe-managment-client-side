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
import { Console } from "console";

const baseUrl = "http://localhost:5000/api/v1";

const headers = {
  accept: "Application/json",
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};

export function* getEmployees(GetEmployeePayload: any) {
  const query = {
    page: GetEmployeePayload?.payload?.page,
    limit: GetEmployeePayload?.payload?.limit,
    search: GetEmployeePayload?.payload?.search,
  };
  try {
    const response: GetEmployeeResponse = yield axios.get<Employee>(
      `${baseUrl}/employee`,
      {
        method: "GET",
        params: {
          page: query?.page,
          limit: query?.limit,
          search: query?.search,
        },
        headers,
      }
    );
    yield put(gotEmployee(response));
  } catch (e) {
    yield put(gotEmployee({ success: false }));
  }
}

export function* addEmployee(Employee: any) {
  const data = {
    ...Employee?.payload,
    dateOfBirth: new Date(
      Employee?.payload?.dateOfBirth?.getFullYear() -
        Employee?.payload?.dateOfBirth?.getMonth() -
        Employee?.payload?.dateOfBirth?.getDate()
    ),
    gender: "Male",
  };
  try {
    const response: AddEmployeeResponse = yield axios.post<AddEmployeeResponse>(
      `${baseUrl}/employee/create`,
      data,
      {
        method: "GET",
        headers,
      }
    );
    yield put(employeeAdded(response));
    console.log(localStorage.getItem("accessToken"));
    console.log(response);
    console.log(Employee?.payload);
    console.log(data);
  } catch (e) {
    yield put(employeeAdded({ success: false }));
    console.log(e);
    console.log(Employee?.payload);
    console.log(data);
  }
}

export function* updateEmployee(employee: Employee) {
  try {
    const response: UpdateEmployeeResponse =
      yield axios.patch<UpdateEmployeeResponse>(
        `${baseUrl}/employee/update/${employee._id}`,
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
        `${baseUrl}/employee/delete/${employee._id}}`,
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
