import {
  SET_COUNT,
  SET_PAGE_SIZE,
  SET_CURRENT_PAGE,
  RESET_PAGINATION,
} from './constants';

const { default: produce } = require('immer');

export const initialState = {
  currentPage: 1,
  count: 0,
  pageSize: 20,
};

const paginationReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_COUNT:
        draft.count = action.payload;
        break;
      case SET_PAGE_SIZE:
        draft.pageSize = action.payload;
        break;
      case SET_CURRENT_PAGE:
        draft.currentPage = action.payload;
        break;
      case RESET_PAGINATION:
        draft.currentPage = 1;
        draft.count = 0;
        draft.pageSize = 20;
      default:
        break;
    }
  });

export default paginationReducer;
