import { countrySelector } from 'containers/TopNews/selectors';
import React, { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { debounce } from 'lodash';
import ThumbnailList from 'components/Thumbnails/ThumbnailList';
import { searchNews, setValue } from './actions';
import { searchedArticlesSelector, valueSelector } from './selectors';
import { withTranslation } from 'react-i18next';
import { resetPagination } from 'components/Thumbnails/actions';

const key = 'search';

const Search = ({ t }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  const country = useSelector(countrySelector());
  const value = useSelector(valueSelector());
  const handleChange = ({ target }) => {
    dispatch(setValue(target.value));
    debounceSearch(target.value);
  };
  const searchValue = (value) => dispatch(searchNews(value));
  const debounceSearch = useCallback(debounce(searchValue, 500), [dispatch]);

  const articles = useSelector(searchedArticlesSelector());

  useEffect(() => {
    return () => {
      dispatch(resetPagination());
    };
  }, []);
  return (
    <main>
      <Helmet>
        <title>News - Search</title>
      </Helmet>
      <h1>{t('title', { country })}</h1>
      <input type="text" value={value} onChange={handleChange} />
      <main>
        <ThumbnailList getNews={searchNews} list={articles} />
      </main>
    </main>
  );
};

export default withTranslation('search')(Search);
