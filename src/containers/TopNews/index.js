import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getTopNews } from './actions';
import saga from './saga';
import reducer from './reducer';
import { articleSelector, countrySelector } from './selectors';
import { getItem } from 'utils/localStorage';
import ThumbnailList from 'ThumbnailList';
import { withTranslation } from 'react-i18next';

const key = 'articles';

const TopNews = ({ t }) => {
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const selectedCountry = useSelector(countrySelector());
  const articles = useSelector(articleSelector());

  useEffect(() => {
    dispatch(getTopNews({ country: selectedCountry }));
  }, []);

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <main>
        <ThumbnailList list={articles} />
      </main>
    </div>
  );
};

export default withTranslation('home')(TopNews);
