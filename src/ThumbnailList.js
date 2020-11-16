import Thumbnail from 'components/Thumbnail';
import React from 'react';

const ThumbnailList = ({ list }) => (
  <>
    {list.map((item) => (
      <Thumbnail {...item} key={item.url} />
    ))}
  </>
);

export default ThumbnailList;
