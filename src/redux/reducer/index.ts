import { combineReducers } from "redux";
import { employeeReducer } from "./employee";
import { userReducer } from "./user";

export const reducers = combineReducers({
  user: userReducer,
  employee: employeeReducer,
});
