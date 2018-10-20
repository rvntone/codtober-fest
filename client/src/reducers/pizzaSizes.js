import createReducer from './createReducer';
import {
  PIZZA_SIZE_FETCH,
  PIZZA_SIZE_FETCH_SUCCESS,
  PIZZA_SIZE_FETCH_FAILED,
} from '../actions/types/pizzSize';

const INITIAL_STATE = {
  list: [],
  fetching: false,
  error: false,
};

export default createReducer(INITIAL_STATE, {
  [PIZZA_SIZE_FETCH]() {
    return {
      list: [],
      fetching: false,
      error: false,
    };
  },
  [PIZZA_SIZE_FETCH_SUCCESS](state, action) {
    return {
      list: action.response['hydra:member'],
      fetching: false,
      error: false,
    };
  },
  [PIZZA_SIZE_FETCH_FAILED](state) {
    return {
      list: [...state.list],
      fetching: false,
      error: true,
    };
  },
});
