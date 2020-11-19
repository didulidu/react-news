import produce from 'immer';
import { SET_LOADER } from './action';

export const initialState = {
  loader: false,
};

const loaderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADER:
        draft.loader = action.payload;
        break;
      default:
        break;
    }
  });

export default loaderReducer;
