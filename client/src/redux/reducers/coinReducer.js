import {FETCH_DATA, FETCH_FAILED} from '../actions/coins';

const initialState = {
  isFetching: false,
  error: null,
};

export const coins = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        isFetching: true,
      };
    case FETCH_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: 'Error',
      };
    }
    default:
      return state;
  }
};
