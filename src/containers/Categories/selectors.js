const { createSelector } = require('reselect');
const { initialState } = require('./reducer');

const catArticleSel = (state) => state.categories || initialState;

const categoryArticlesSelector = () =>
  createSelector(catArticleSel, (substate) => {
    return substate.ctegoryArticles;
  });

const pageSizeSelector = () =>
  createSelector(catArticleSel, (substate) => {
    return substate.pageSize;
  });

const categorySelector = () =>
  createSelector(catArticleSel, (substate) => {
    return substate.category;
  });

export { categoryArticlesSelector, pageSizeSelector, categorySelector };
