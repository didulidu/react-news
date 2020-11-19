import { setLoader } from 'components/shared/Loader/action';
import { setCount } from 'components/Thumbnails/actions';
import { currentPageSelector } from 'components/Thumbnails/selectors';
import { countrySelector } from 'containers/TopNews/selectors';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setCategoryNews } from './actions';
import { GET_CATEGORY_NEWS } from './actionTypes';
import { categorySelector } from './selectors';

function* handleGetTopFiveNewsByCategory({ payload }) {
  try {
    yield put(setLoader(true));
    const page = yield select(currentPageSelector());
    const category = yield select(categorySelector());
    const country = yield select(countrySelector());
    const { articles, totalResults } = yield call(request, {
      method: 'get',
      url: `top-headlines`,
      params: { category, country, page, ...payload },
    });

    yield put(setCategoryNews(articles));
    yield put(setCount(totalResults));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setLoader(false));
  }
}

export default function* articleSaga() {
  yield takeLatest(GET_CATEGORY_NEWS, handleGetTopFiveNewsByCategory);
}
