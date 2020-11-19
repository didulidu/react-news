import { setLoader } from 'components/shared/Loader/action';
import { setCount } from 'components/Thumbnails/actions';
import { currentPageSelector } from 'components/Thumbnails/selectors';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setTopNews } from './actions';
import { GET_TOP_NEWS } from './constants';
import { countrySelector } from './selectors';

function* handleGetTopNews() {
  try {
    const country = yield select(countrySelector());
    const page = yield select(currentPageSelector());

    yield put(setLoader(true));
    const { articles, totalResults } = yield call(request, {
      method: 'get',
      url: `top-headlines`,
      params: { country, page },
    });
    yield put(setTopNews({ articles }));
    yield put(setCount(totalResults));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setLoader(false));
  }
}

export default function* articleSaga() {
  yield takeLatest(GET_TOP_NEWS, handleGetTopNews);
}
