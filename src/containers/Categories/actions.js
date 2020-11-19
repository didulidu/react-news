import {
  GET_CATEGORY_NEWS,
  SET_CATEGORY,
  SET_CATEGORY_NEWS,
  SET_PAGE_SIZE,
} from './actionTypes';

export const getCategoryNews = (payload) => ({
  type: GET_CATEGORY_NEWS,
  payload,
});

export const setCategoryNews = (payload) => ({
  type: SET_CATEGORY_NEWS,
  payload,
});

export const setCategory = (payload) => ({
  type: SET_CATEGORY,
  payload,
});

export const setPageSize = (payload) => ({
  type: SET_PAGE_SIZE,
  payload,
});
