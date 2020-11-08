import { SET_TOP_NEWS } from './constants';

const { default: produce } = require('immer');

export const initialState = {
  articles: [],
};

const newsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TOP_NEWS:
        console.log(action.payload);
        draft.articles = action.payload;
        break;
      default:
        break;
    }
  });

export default newsReducer;
