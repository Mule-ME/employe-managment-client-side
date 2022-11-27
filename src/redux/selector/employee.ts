import { State } from "../reducer/employee";

export const employeeSelector = (state: any) => state.employee?.employee?.data;
