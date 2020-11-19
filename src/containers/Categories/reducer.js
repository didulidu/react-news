import { SET_CATEGORY_NEWS, SET_CATEGORY, SET_PAGE_SIZE } from './actionTypes';
import { CATEGORIES } from './constants';

const { default: produce } = require('immer');

export const initialState = {
  ctegoryArticles: [],
  pageSize: 5,
  category: CATEGORIES[0],
};

const categoriesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_CATEGORY_NEWS:
        draft.ctegoryArticles = action.payload;
        break;
      case SET_CATEGORY:
        draft.category = action.payload;
      case SET_PAGE_SIZE:
        draft.pageSize = action.payload;
      default:
        break;
    }
  });

export default categoriesReducer;
