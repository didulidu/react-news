import { countrySelector } from 'containers/TopNews/selectors';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useDispatch, useSelector } from 'react-redux';
import { CATEGORIES } from './constants';
import 'react-accessible-accordion/dist/fancy-example.css';
import { css } from '@emotion/react';
import { CATEGORIES as CATEGORIES_ROUTE } from '../../routes';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import HorizontalHoverScroller from 'components/shared/HorizontalHoverScroller';
import Thumbnail from 'components/Thumbnails/Thumbnail';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import loadReducer from '../../components/shared/Loader/reducer';
import saga from './saga';
import { useInjectSaga } from 'utils/injectSaga';
import LoaderWrapper from 'components/shared/Loader';
import { categoryArticlesSelector, pageSizeSelector } from './selectors';
import { getCategoryNews, setCategory } from './actions';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const horizontalScrollStyle = css`
  display: flex;
  align-items: flex-start;
  margin-left: 1.5625rem;

  @media (min-width: 1024px) {
    margin-left: 3.125rem;
  }
`;

const key = 'categories';
const loadKey = 'loader';

const Categories = ({ t }) => {
  useInjectReducer({ key, reducer });
  useInjectReducer({ key: loadKey, reducer: loadReducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const articles = useSelector(categoryArticlesSelector());
  const country = useSelector(countrySelector());
  const pageSize = useSelector(pageSizeSelector());
  const handleChange = ([category]) => {
    dispatch(setCategory(category));
    dispatch(getCategoryNews({ pageSize: 5 }));
  };

  return (
    <>
      <Helmet>
        <title>News - Categories</title>
      </Helmet>
      <p>{t('topXNews', { pageSize, country })}</p>
      <Accordion onChange={handleChange}>
        {CATEGORIES.map((category) => {
          return (
            <AccordionItem key={category} uuid={category}>
              <AccordionItemHeading>
                <AccordionItemButton>{t(category)}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <LoaderWrapper>
                  <HorizontalHoverScroller
                    height={23}
                    padding={50}
                    listWrapperStyle={horizontalScrollStyle}
                  >
                    {articles.map((item) => (
                      <Thumbnail key={item.urlToImage} item={item} />
                    ))}
                  </HorizontalHoverScroller>
                  <Link to={`${CATEGORIES_ROUTE}/${category}`}>Show more</Link>
                </LoaderWrapper>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default withTranslation('categories')(Categories);
