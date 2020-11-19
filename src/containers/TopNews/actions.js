import { GET_TOP_NEWS, SET_TOP_NEWS, SET_COUNTRY } from './constants';

export const getTopNews = (payload) => ({
  type: GET_TOP_NEWS,
  payload,
});

export const setTopNews = (payload) => ({
  type: SET_TOP_NEWS,
  payload,
});

export const setCountry = (payload) => ({
  type: SET_COUNTRY,
  payload,
});
