import * as actions from '../actions/categories';

export const categories = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
