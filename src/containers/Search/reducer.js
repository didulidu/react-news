import produce from 'immer';
import { SEARCH_NEWS_SET, SET_VALUE } from './constants';

export const initialState = {
  searchedArticles: [],
  value: '',
};

/* eslint-disable default-case */
const searchReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_NEWS_SET:
        draft.searchedArticles = action.payload;
        break;
      case SET_VALUE:
        draft.value = action.payload;
        break;
      default:
        break;
    }
  });

export default searchReducer;
