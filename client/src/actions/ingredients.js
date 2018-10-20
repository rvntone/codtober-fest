import apiActionCreator from '../middlewares/api/actionCreator';
import {
  INGREDIENTS_FETCH,
  INGREDIENTS_FETCH_SUCCESS,
  INGREDIENTS_FETCH_FAILED,
} from './types/ingredients';

export const fetchIngredients = () => {
  return apiActionCreator({
    endpoint: '/ingredients',
    types: [
      INGREDIENTS_FETCH,
      [INGREDIENTS_FETCH_SUCCESS],
      [INGREDIENTS_FETCH_FAILED],
    ],
    method: 'GET',
    accept: 'application/ld+json',
  });
};
