import React from 'react';
import PropTypes from 'prop-types';
import Image from './shared/Image';

const Thumbnail = ({ description, title, urlToImage, key }) => {
  return (
    <React.Fragment key={key}>
      <h4>{title}</h4>
      <Image src={urlToImage} alt={'No image found'} isLazyLoad />
      <p>{description}</p>
    </React.Fragment>
  );
};

Thumbnail.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  source: PropTypes.object,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  ke: PropTypes.string,
};

export default Thumbnail;
