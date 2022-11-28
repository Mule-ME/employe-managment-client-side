import { put } from "@redux-saga/core/effects";
import axios from "axios";
import { LoginResponse, LoginPayload } from "../../types";
import { userLogged } from "../action/user";

const baseUrl = "http://localhost:5000/api/v1";

const headers = {
  accept: "Application/json",
  "Content-Type": "application/json",
};

export function* loginUser({ email, password }: LoginPayload) {
  try {
    const requestData = { email, password };
    const { data } = yield axios.post<LoginResponse>(
      `${baseUrl}/admin/login`,
      requestData,
      {
        method: "POST",
        headers,
      }
    );
    yield put(userLogged(data));
    const token = data?.accessToken;
    localStorage.setItem("accessToken", token);
    window.location.replace("/");
  } catch (e) {
    console.log(e);
    yield put(userLogged({ success: false }));
  }
}
