import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_TOP_NEWS_COUNTRIES } from './constants';
import classNames from 'classnames';
import reducer from 'containers/TopNews/reducer';
import saga from 'containers/TopNews/saga';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from 'containers/TopNews/actions';
import { countrySelector } from 'containers/TopNews/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { resetPagination } from 'components/Thumbnails/actions';
const key = 'articles';

const TopNewsCountriesList = ({ countries, disabled, getNewsAction }) => {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  const selectedCountry = useSelector(countrySelector());

  const isSelected = (country) => {
    return selectedCountry === country;
  };
  const handleClick = ({ target }) => {
    dispatch(resetPagination());
    dispatch(setCountry(target.value));
    dispatch(getNewsAction());
  };

  return (
    <div className="top-news">
      {countries.map((country) => (
        <span key={country}>
          <button
            disabled={disabled}
            className={classNames({
              'top-news-button': true,
              selected: isSelected(country),
            })}
            value={country}
            onClick={handleClick}
          >
            {country}
          </button>
        </span>
      ))}
    </div>
  );
};

TopNewsCountriesList.propTypes = {
  countries: PropTypes.array,
};

TopNewsCountriesList.defaultProps = {
  countries: DEFAULT_TOP_NEWS_COUNTRIES,
};

export default TopNewsCountriesList;
