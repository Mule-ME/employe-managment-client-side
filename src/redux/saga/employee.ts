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
import { gotEmployee } from "../action/employee";

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
    const { data } = yield axios.get<GetEmployeeResponse>(
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
    yield put(gotEmployee(data));
    console.log(data, "this is the response");
  } catch (e) {
    yield put(gotEmployee({ success: false }));
  }
}
export function* addEmployee({ employee }: any) {
  try {
    const { data } = yield axios.post<AddEmployeeResponse>(
      `${baseUrl}/employee/create`,
      employee,
      {
        method: "POST",
        headers,
      }
    );
    yield put(employeeAdded(data));
    console.log(data, "this is the response");
  } catch (e) {
    yield put(employeeAdded({ success: false }));
    console.log(e, "this is the response");
  }
}

export function* updateEmployee({ employee }: any) {
  try {
    const { data } = yield axios.patch<UpdateEmployeeResponse>(
      `${baseUrl}/employee/update/${employee._id}`,
      {
        method: "PATCH",
        headers,
      }
    );
    yield put(updatedEmployee(data));
  } catch (e) {
    yield put(updatedEmployee({ success: false }));
    console.log(headers, "headers");
  }
}

export function* deleteEmployee({ employee }: any) {
  try {
    yield axios.delete<DeleteEmployeeResponse>(
      `${baseUrl}/employee/delete/${employee._id}}`,
      {
        method: "DELETE",
        headers,
      }
    );
    yield put(deletedEmployee({ ...employee, success: true }));
  } catch (e) {
    console.log({ e });
    yield put(deletedEmployee({ success: false }));
  }
}
