import { SEARCH_NEWS, SEARCH_NEWS_SET, SET_VALUE } from './constants';

export const searchNews = (payload) => {
  return {
    type: SEARCH_NEWS,
    payload,
  };
};

export const searchedNewsSet = (payload) => {
  return {
    type: SEARCH_NEWS_SET,
    payload,
  };
};

export const setValue = (payload) => {
  return {
    type: SET_VALUE,
    payload,
  };
};
