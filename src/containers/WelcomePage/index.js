import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getTopNews } from './actions';
import saga from './saga';
import reducer from './reducer';
import { articleSelector } from './selector';
import { getItem } from 'utils/localStorage';
import ThumbnailList from 'ThumbnailList';
import { withTranslation } from 'react-i18next';

const key = 'articles';

const WelcomePage = ({ t }) => {
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  useEffect(() => {
    dispatch(getTopNews({ country: getItem('country') || 'gb' }));
  }, []);

  const articles = useSelector(articleSelector());
  console.log('ttt', t);
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

export default withTranslation()(WelcomePage);
