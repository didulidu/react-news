import { SET_TOP_NEWS } from './constants';

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
        draft.country = action.payload.country;
        break;
      default:
        break;
    }
  });

export default newsReducer;
