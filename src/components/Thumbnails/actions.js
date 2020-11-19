import {
  SET_COUNT,
  GET_COUNT,
  SET_PAGE_SIZE,
  GET_PAGE_SIZE,
  SET_CURRENT_PAGE,
  GET_CURRENT_PAGE,
  RESET_PAGINATION,
} from './constants';

export const setCount = (payload) => ({
  type: SET_COUNT,
  payload,
});

export const getCount = (payload) => ({
  type: GET_COUNT,
  payload,
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const getCurrentPage = (payload) => ({
  type: GET_CURRENT_PAGE,
  payload,
});

export const setPageSize = (payload) => ({
  type: SET_PAGE_SIZE,
  payload,
});

export const getPageSize = (payload) => ({
  type: GET_PAGE_SIZE,
  payload,
});

export const resetPagination = () => ({
  type: RESET_PAGINATION,
});
