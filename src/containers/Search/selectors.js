const { createSelector } = require('reselect');
const { initialState } = require('./reducer');

const searchSel = (state) => state.search || initialState;

const searchedArticlesSelector = () =>
  createSelector(searchSel, (substate) => {
    return substate.searchedArticles;
  });

const valueSelector = () =>
  createSelector(searchSel, (substate) => {
    return substate.value;
  });

export { searchedArticlesSelector, valueSelector };
