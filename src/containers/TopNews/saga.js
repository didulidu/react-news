import { setLoader } from 'components/shared/Loader/action';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setTopNews } from './actions';
import { GET_TOP_NEWS } from './constants';
import { countrySelector } from './selectors';

function* handleGetTopNews({ payload }) {
  try {
    const country = yield select(countrySelector());

    yield put(setLoader(true));
    const { articles } = yield call(request, {
      method: 'get',
      url: `top-headlines`,
      params: { ...payload, country },
    });

    yield put(setTopNews({ articles }));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setLoader(false));
  }
}

export default function* articleSaga() {
  yield takeLatest(GET_TOP_NEWS, handleGetTopNews);
}
