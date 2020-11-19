import React from 'react';
import { useSelector } from 'react-redux';
import { loaderSelector } from './selector';
import Loader from 'react-loader-spinner';
import styled from '@emotion/styled';

const StyledLoader = styled.div`
  margin: auto;
  width: 50%;
`;

const LoaderWrapper = ({ children }) => {
  const loader = useSelector(loaderSelector());
  return loader ? (
    <StyledLoader>
      <Loader type="ThreeDots" color="#00BFFF" height={60} width={60} />
    </StyledLoader>
  ) : (
    children
  );
};

export default LoaderWrapper;
