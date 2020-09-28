const { createSelector } = require('reselect');
const { initialState } = require('./reducer');

const imageSel = (state) => state.image || initialState;

const imageSelector = () =>
  createSelector(imageSel, (substate) => {
    console.log(substate);
    return substate.image;
  });

export { imageSelector };
