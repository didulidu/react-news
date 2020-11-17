import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_TOP_NEWS_COUNTRIES } from './constants';
import classNames from 'classnames';
import reducer from 'containers/TopNews/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { getTopNews } from 'containers/TopNews/actions';
import { countrySelector } from 'containers/TopNews/selectors';
const key = 'country';

const TopNewsCountriesList = ({ countries }) => {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });

  const selectedCountry = useSelector(countrySelector());

  const isSelected = (country) => {
    return selectedCountry === country;
  };

  const handleClick = ({ target }) => {
    dispatch(getTopNews({ country: target.value }));
  };

  return (
    <div className="top-news">
      {countries.map((country) => (
        <span key={country}>
          <button
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
