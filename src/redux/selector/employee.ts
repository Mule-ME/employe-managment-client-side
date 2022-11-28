import { AppState } from "../reducer/employee";

const employeeSelector = (state: any) => state?.employee;

export const employeeListSelector = (state: AppState) =>
  employeeSelector(state)?.employee?.data;
