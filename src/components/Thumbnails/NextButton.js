import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import {
  countSelector,
  currentPageSelector,
  pageSizeSelector,
} from './selectors';
import reducer from './reducer';
import { setCurrentPage } from './actions';
import { getTopNews } from 'containers/TopNews/actions';
const key = 'pagination';

const NextButton = ({ getNews }) => {
  useInjectReducer({ key, reducer });
  const count = useSelector(countSelector());
  const pageSize = useSelector(pageSizeSelector());
  const currentPage = useSelector(currentPageSelector());
  const dispatch = useDispatch();

  const pageNumber = Math.ceil(count / pageSize);
  const buttonArrayCount = new Array(pageNumber);
  for (let i = 0; i < buttonArrayCount.length; i++) {
    buttonArrayCount[i] = (
      <button key={i} onClick={() => handleClick(i + 1)}>
        {i + 1}
      </button>
    );
  }

  const handleClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(getNews());
  };
  return (
    <>
      <h1>Current page: {currentPage}</h1>
      {buttonArrayCount}
    </>
  );
};

export default NextButton;
