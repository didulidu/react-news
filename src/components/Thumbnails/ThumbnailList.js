import React from 'react';
import { withTranslation } from 'react-i18next';
import Thumbnail from './Thumbnail';

const ThumbnailList = ({ list, t }) => (
  <>
    {list.map((item) => (
      <Thumbnail item={item} key={item.url} />
    ))}
  </>
);

export default withTranslation('home')(ThumbnailList);
