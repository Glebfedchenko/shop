import * as actions from '../actions/users';

export const users = (state = {}, action) => {
  switch (action.type) {
    case actions.LOGIN_URSER:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    default:
      return state;
  }
};
