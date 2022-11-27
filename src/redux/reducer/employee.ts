import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EMPLOYEE_ADDED,
  EMPLOYEE_DELETED,
  EMPLOYEE_UPDATED,
  GET_EMPLOYEES,
  GOT_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from "./../actionType/employee";
import { Employee } from "../../types";

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  employee: {
    data: Employee[];
    total?: number;
  };
  addingEmployee: boolean;
  gettingEmployee: boolean;
  updatingEmployee: boolean;
  deletingEmployee: boolean;
}

const initialState: State = {
  employee: {
    data: [],
    total: 0,
  },
  addingEmployee: false,
  gettingEmployee: false,
  updatingEmployee: false,
  deletingEmployee: false,
};

export const employeeReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, gettingEmployee: true };
    case GOT_EMPLOYEES:
      if (action.payload.success)
        return {
          ...state,
          gettingEmployee: false,
          employee: action.payload.response,
        };
      else return { ...state, gettingEmployee: false };
    case ADD_EMPLOYEE:
      return { ...state, addingEmployee: true };
    case EMPLOYEE_ADDED:
      if (action.payload.success)
        return {
          ...state,
          addingEmployee: false,
          employee: {
            data: state.employee.data,
            total: state.employee.total || 0 + 1,
          },
        };
      else return { ...state, addingEmployee: false };
    case UPDATE_EMPLOYEE:
      return { ...state, updatingEmployee: true };
    case EMPLOYEE_UPDATED:
      if (action.payload.success)
        return {
          ...state,
          updatingEmployee: false,
          employee: {
            data: state.employee.data?.map((employee) => {
              if (employee._id === action.payload.employee?._id)
                return action.payload.employee;
              return employee;
            }),
          },
        };
      else return { ...state, updatingEmployee: false };
    case DELETE_EMPLOYEE:
      return { ...state, deletingEmployee: true };
    case EMPLOYEE_DELETED:
      if (action.payload.success)
        return {
          ...state,
          deletingEmployee: false,
          employee: {
            data: state.employee.data?.filter((employee) => {
              if (employee._id !== action.payload._id)
                return action.payload.employee;
              return employee;
            }),
            total: state.employee.total ?? -1,
          },
        };
      else return { ...state, deletingEmployee: false };
    default:
      return state;
  }
};
