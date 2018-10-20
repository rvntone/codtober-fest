import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ingredientsReducer from './ingredients';
import pizzaSizesReducer from './pizzaSizes';
import ordersReducer from './orders';

const reducers = {
  routing: routerReducer,
  ingredients: ingredientsReducer,
  pizzaSizes: pizzaSizesReducer,
  orders: ordersReducer,
};

const createReducers = () => {
  return combineReducers(reducers);
};

const rootReducer = (state, action) => {
  const internalReducers = createReducers();
  //Here you can add some globa action to affect the state
  return internalReducers(state, action);
};

export { createReducers };

export default rootReducer;
