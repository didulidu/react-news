import { IMAGE_SET } from './constants';

const { default: produce } = require('immer');

export const initialState = {
  image: null,
};

const imageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case IMAGE_SET:
        draft.image = action.payload;
        break;
      default:
        break;
    }
  });

export default imageReducer;
