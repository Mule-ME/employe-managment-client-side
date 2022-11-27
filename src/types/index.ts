import { Location } from "react-router-dom";

export type Employee = {
  _id?: string;
  name?: string;
  email?: string;
  salary?: number;
  dateOfBirth?: Date;
  gender?: string;
};

export type GetEmployeePayload = {
  page?: number;
  limit?: number;
  search?: string;
};

export type GetEmployeeResponse = {
  data?: Employee[];
  total?: number;
  success?: boolean;
};

export type UpdateEmployeeResponse = {
  data?: Employee;
  success?: boolean;
};

export type DeleteEmployeeResponse = {
  message?: string;
  success?: boolean;
};

export type AddEmployeeResponse = {
  data?: Employee;
  success?: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  email?: string;
  name?: string;
  _id?: string;
  token?: string;
  success: boolean;
};

export type User = {
  email: string;
  name: string;
  _id: string;
};
