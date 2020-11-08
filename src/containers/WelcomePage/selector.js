const { createSelector } = require('reselect');
const { initialState } = require('./reducer');

const articleSel = (state) => state.articles || initialState;

const articleSelector = () =>
  createSelector(articleSel, (substate) => {
    console.log(substate);
    return substate.articles;
  });

export { articleSelector };
