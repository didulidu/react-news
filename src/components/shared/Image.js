import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazyload';

const Image = ({ src, alt = '#', isLazyLoad, ...props }) => {
  if (!src) {
    return null;
  }

  return isLazyLoad ? (
    <LazyLoad once offset={200}>
      <img src={src} alt={alt} {...props} />
    </LazyLoad>
  ) : (
    <img src={src} alt={alt} {...props} />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  isLazyLoad: PropTypes.bool,
};

Image.defaultProps = {
  alt: '',
  isLazyLoad: false,
};

export default Image;
