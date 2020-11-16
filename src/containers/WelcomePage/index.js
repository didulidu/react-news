import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getTopNews } from './actions';
import saga from './saga';
import reducer from './reducer';
import { articleSelector } from './selector';
import { getItem } from 'utils/localStorage';
import Thumbnail from 'components/Thumbnail';
import ThumbnailList from 'ThumbnailList';
import * as x from 'i18n';

const key = 'articles';

function WelcomePage() {
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  useEffect(() => {
    dispatch(getTopNews({ country: getItem('country') || 'gb' }));
  }, []);

  console.log('QQQXW', x);
  const articles = useSelector(articleSelector());

  return (
    <div>
      <Helmet>
        <title>News</title>
      </Helmet>
      <main>
        <ThumbnailList list={articles} />
      </main>
    </div>
  );
}

export default WelcomePage;
