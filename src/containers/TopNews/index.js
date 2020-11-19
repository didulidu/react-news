import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getTopNews } from './actions';
import saga from './saga';
import reducer from './reducer';
import { articleSelector, countrySelector } from './selectors';
import ThumbnailList from 'components/Thumbnails/ThumbnailList';
import { withTranslation } from 'react-i18next';
import { resetPagination } from 'components/Thumbnails/actions';

const key = 'articles';

const TopNews = ({ t }) => {
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const selectedCountry = useSelector(countrySelector());
  const articles = useSelector(articleSelector());

  useEffect(() => {
    dispatch(getTopNews());
    return () => {
      dispatch(resetPagination());
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <main>
        <ThumbnailList getNews={getTopNews} list={articles} />
      </main>
    </div>
  );
};

export default withTranslation('home')(TopNews);
