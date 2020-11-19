const { createSelector } = require('reselect');
const { initialState } = require('./reducer');

const paginationSel = (state) => state.pagination || initialState;

const pageSizeSelector = () =>
  createSelector(paginationSel, (substate) => {
    return substate.pageSize;
  });

const currentPageSelector = () =>
  createSelector(paginationSel, (substate) => {
    return substate.currentPage;
  });

const countSelector = () =>
  createSelector(paginationSel, (substate) => {
    return substate.count;
  });

export { pageSizeSelector, currentPageSelector, countSelector };
