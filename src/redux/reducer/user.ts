import { LOGIN_USER, USER_LOGGED } from "./../actionType/user";
import { User } from "../../types";

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  user?: User | null;
  loggingUser?: boolean;
}

const initialState: State = {
  user: null,
  loggingUser: false,
};

export const userReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loggingUser: true };
    case USER_LOGGED:
      if (action.payload.success)
        return {
          ...state,
          loggingUser: false,
          user: action.payload.response,
        };
      else return { ...state, loggingUser: false };
    default:
      return state;
  }
};
