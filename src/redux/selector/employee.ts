import { State } from "../reducer/employee";

export const employeeSelector = (State: any) => State.employee?.employee?.data;
