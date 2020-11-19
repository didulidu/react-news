import ThumbnailList from 'components/Thumbnails/ThumbnailList';
import { getCategoryNews, setCategory } from 'containers/Categories/actions';
import {
  categoryArticlesSelector,
  categorySelector,
} from 'containers/Categories/selectors';
import { countrySelector } from 'containers/TopNews/selectors';
import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from '../Categories/reducer';
import saga from '../Categories/saga';

const key = 'categories';

const SingleCategory = (props) => {
  const {
    match: { params },
    t,
  } = props;
  const country = useSelector(countrySelector());
  const category = useSelector(categorySelector());
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const articles = useSelector(categoryArticlesSelector());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategory(params.id));
    dispatch(getCategoryNews({ pageSize: 20 }));
  }, []);

  return (
    <>
      <h1>{t('topCategoryFrom', { category, country })}</h1>
      <ThumbnailList list={articles} />
    </>
  );
};

export default withTranslation('categories')(SingleCategory);
