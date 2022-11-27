import { put } from "@redux-saga/core/effects";
import axios from "axios";
import { LoginResponse, LoginPayload } from "../../types";
import { userLogged } from "../action/user";

const baseUrl = "http://localhost:5000/api/v1";

const headers = {
  accept: "Application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export function* loginUser({ email, password }: LoginPayload) {
  try {
    // const data
    const response: LoginResponse = yield axios.post<LoginResponse>(
      `${baseUrl}/user/login`,
      {
        method: "POST",
        headers,
      }
    );
    yield put(userLogged(response));
    window.location.pathname = "/";
  } catch (e) {
    console.log(e);
    yield put(userLogged({ success: false }));
  }
}
