import Image from 'components/shared/Image';
import React from 'react';

const SingleNews = ({ location }) => {
  const { title, content, urlToImage } = location?.state?.item || {};
  return (
    <>
      <h1>{title}</h1>
      <Image src={urlToImage} alt={'No image found'} isLazyLoad />
      <p>{content}</p>
    </>
  );
};

export default SingleNews;
