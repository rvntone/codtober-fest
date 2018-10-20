import apiActionCreator from '../middlewares/api/actionCreator';
import { push } from 'react-router-redux';
import {
  ORDER_CREATE,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILED,
  ORDERS_FETCH,
  ORDERS_FETCH_SUCCESS,
  ORDERS_FETCH_FAILED,
} from './types/orders';

export const createOrder = order => dispatch => {
  return dispatch(
    apiActionCreator({
      endpoint: '/orders',
      data: order,
      method: 'POST',
      types: [
        ORDER_CREATE,
        [ORDER_CREATE_SUCCESS, () => dispatch(push('/orders'))],
        [ORDER_CREATE_FAILED],
      ],
      accept: 'application/ld+json',
    }),
  );
};

export const fetchOrders = order => dispatch => {
  return dispatch(
    apiActionCreator({
      endpoint: '/orders',
      data: order,
      method: 'GET',
      types: [ORDERS_FETCH, [ORDERS_FETCH_SUCCESS], [ORDERS_FETCH_FAILED]],
      accept: 'application/ld+json',
    }),
  );
};
