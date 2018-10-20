import apiActionCreator from '../middlewares/api/actionCreator';
import {
  PIZZA_SIZE_FETCH,
  PIZZA_SIZE_FETCH_SUCCESS,
  PIZZA_SIZE_FETCH_FAILED,
} from './types/pizzSize';

export const fetchPizzaSizes = () => {
  return apiActionCreator({
    endpoint: '/pizza_sizes',
    types: [
      PIZZA_SIZE_FETCH,
      [PIZZA_SIZE_FETCH_SUCCESS],
      [PIZZA_SIZE_FETCH_FAILED],
    ],
    method: 'GET',
    accept: 'application/ld+json',
  });
};
