import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { imageSet } from './actions';
import { IMAGE_GET } from './constants';

const MAX_TIME_TO_TRY = 4;

function* handleImageGet({ payload }) {
  let counter = 0;
  while (counter < MAX_TIME_TO_TRY) {
    try {
      const { imageUrl } = yield call(request, {
        method: 'get',
        url: `/`,
        params: { query: payload },
      });
      yield put(imageSet(imageUrl));
      break;
    } catch (e) {
      counter += 1;
      console.log(e);
    }
  }
}

// function* send(payload) {
//     const { imageUrl }= yield call(request, {
//         method: 'get',
//         url: `/`,
//         params: { query: payload }
//     });

//     return imageUrl;
// }

export default function* imageSaga() {
  yield takeLatest(IMAGE_GET, handleImageGet);
}
