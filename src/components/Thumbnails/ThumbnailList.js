import React from 'react';
import { withTranslation } from 'react-i18next';
import NextButton from './NextButton';
import Thumbnail from './Thumbnail';

const ThumbnailList = ({ list, getNews }) => (
  <>
    {list.map((item) => (
      <Thumbnail item={item} key={item.url} />
    ))}
    <footer>
      <NextButton getNews={getNews} />
    </footer>
  </>
);

export default withTranslation('home')(ThumbnailList);
