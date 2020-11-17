const { createSelector } = require('reselect');
const { initialState } = require('./reducer');

const articleSel = (state) => state.articles || initialState;

const articleSelector = () =>
  createSelector(articleSel, (substate) => {
    return substate.articles;
  });

const countrySelector = () =>
  createSelector(articleSel, (substate) => {
    return substate.country;
  });

export { articleSelector, countrySelector };
