import Thumbnail from 'components/Thumbnail';
import React from 'react';
import { withTranslation } from 'react-i18next';

const ThumbnailList = ({ list, t }) => (
  <>
    <h1>{t('title')}</h1>
    {list.map((item) => (
      <Thumbnail {...item} key={item.url} />
    ))}
  </>
);

export default withTranslation('home')(ThumbnailList);
