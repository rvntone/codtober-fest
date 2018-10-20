import createReducer from './createReducer';
import {
  INGREDIENTS_FETCH,
  INGREDIENTS_FETCH_SUCCESS,
  INGREDIENTS_FETCH_FAILED,
} from '../actions/types/ingredients';

const INITIAL_STATE = {
  list: [],
  fetching: false,
  error: false,
};

export default createReducer(INITIAL_STATE, {
  [INGREDIENTS_FETCH]() {
    return {
      list: [],
      fetching: false,
      error: false,
    };
  },
  [INGREDIENTS_FETCH_SUCCESS](state, action) {
    return {
      list: action.response['hydra:member'],
      fetching: false,
      error: false,
    };
  },
  [INGREDIENTS_FETCH_FAILED](state) {
    return {
      list: [...state.list],
      fetching: false,
      error: true,
    };
  },
});
