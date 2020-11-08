import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setTopNews } from './actions';
import { GET_TOP_NEWS } from './constants';

function* handleGetTopNews({ payload }) {
  try {
    const { articles } = yield call(request, {
      method: 'get',
      url: `top-headlines`,
      params: payload,
    });

    yield put(setTopNews(articles));
  } catch (e) {
    console.log(e);
  }
}

export default function* articleSaga() {
  yield takeLatest(GET_TOP_NEWS, handleGetTopNews);
}
