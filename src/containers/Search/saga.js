import { setCount } from 'components/Thumbnails/actions';
import { currentPageSelector } from 'components/Thumbnails/selectors';
import { countrySelector } from 'containers/TopNews/selectors';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { searchedNewsSet } from './actions';
import { SEARCH_NEWS } from './constants';
import { valueSelector } from './selectors';

function* handleSearchNews() {
  try {
    const country = yield select(countrySelector());
    const q = yield select(valueSelector());
    const page = yield select(currentPageSelector());
    const { articles, totalResults } = yield call(request, {
      method: 'get',
      url: `/top-headlines`,
      params: { q, country, page },
    });
    yield put(searchedNewsSet(articles));
    yield put(setCount(totalResults));
  } catch (e) {
    console.log(e);
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH_NEWS, handleSearchNews);
}
