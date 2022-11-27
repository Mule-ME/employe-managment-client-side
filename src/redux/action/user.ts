import { LoginPayload, LoginResponse } from "../../types";
import { LOGIN_USER, USER_LOGGED } from "./../actionType/user";

export const login = (payload: LoginPayload) => ({
  type: LOGIN_USER,
  ...payload,
});

export const userLogged = (response: LoginResponse) => ({
  type: USER_LOGGED,
  payload: response,
});
