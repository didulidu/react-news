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

const key = 'articles';

function WelcomePage() {
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  useEffect(() => {
    dispatch(getTopNews({ country: getItem('country') || 'gb' }));
  }, []);
  const articles = useSelector(articleSelector());

  return (
    <div>
      <Helmet>
        <title>News</title>
      </Helmet>
      <main>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Type something"
        />
        {articles.map((article) => (
          <Thumbnail {...article} key={article.url} />
        ))}
      </main>
    </div>
  );
}

export default WelcomePage;
