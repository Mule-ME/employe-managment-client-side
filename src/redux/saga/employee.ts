import axios from "axios";
import { baseUrl, headers } from "../../utils";
import {
  deletedEmployee,
  employeeAdded,
  updatedEmployee,
  gotEmployee,
} from "../action/addEmployee";
import {
  AddEmployeeResponse,
  DeleteEmployeeResponse,
  GetEmployeeResponse,
  UpdateEmployeeResponse,
} from "../../types/index";
import { put } from "@redux-saga/core/effects";

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
  } catch (e) {
    yield put(gotEmployee({ success: false }));
  }
}
export function* addEmployee({ employee }: any) {
  try {
    const { data } = yield axios.post<AddEmployeeResponse>(
      `${baseUrl}/employee`,
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
      `${baseUrl}/employee/${employee._id}`,
      employee,
      {
        method: "PATCH",
        headers,
      }
    );
    yield put(updatedEmployee(data));
    console.log(data, "headers", employee);
  } catch (e) {
    yield put(updatedEmployee({ success: false }));
  }
}

export function* deleteEmployee({ employee }: any) {
  try {
    yield axios.delete<DeleteEmployeeResponse>(
      `${baseUrl}/employee/${employee._id}}`,
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
