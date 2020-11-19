import { SET_COUNTRY, SET_TOP_NEWS } from './constants';

const { default: produce } = require('immer');

export const initialState = {
  articles: [],
  country: 'GB',
};

const newsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TOP_NEWS:
        draft.articles = action.payload.articles;
        break;
      case SET_COUNTRY:
        draft.country = action.payload;
        break;
      default:
        break;
    }
  });

export default newsReducer;
