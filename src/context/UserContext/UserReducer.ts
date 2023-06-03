import { types } from "../Types/types";

interface Action {
  type: string;
  payload?: any;
}

export const userReducer = (state = {}, action:Action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: { ...action.payload },
      };
    case types.logout:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  };
}

export default userReducer;