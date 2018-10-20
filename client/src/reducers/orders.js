import createReducer from './createReducer';
import {
  ORDERS_FETCH,
  ORDERS_FETCH_SUCCESS,
  ORDERS_FETCH_FAILED,
} from '../actions/types/orders';

const INITIAL_STATE = {
  list: [],
  fetching: false,
  error: false,
};

export default createReducer(INITIAL_STATE, {
  [ORDERS_FETCH]() {
    return {
      list: [],
      fetching: false,
      error: false,
    };
  },
  [ORDERS_FETCH_SUCCESS](state, action) {
    return {
      list: action.response['hydra:member'],
      fetching: false,
      error: false,
    };
  },
  [ORDERS_FETCH_FAILED](state) {
    return {
      list: [...state.list],
      fetching: false,
      error: true,
    };
  },
});
