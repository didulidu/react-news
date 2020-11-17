import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TOP_NEWS, CATEGORIES, SEARCH } from 'routes';
import { withTranslation } from 'react-i18next';
import LanguagePicker from 'components/Language';
import TopNewsCountriesList from 'components/TopNewsCountriesList';

const AppBar = ({ t }) => {
  return (
    <header>
      <Link to={TOP_NEWS}>{t('topNews')}</Link>
      <Link to={CATEGORIES}>{t('categories')}</Link>
      <Link to={SEARCH}>{t('search')}</Link>
      <span className="bar-right">
        <LanguagePicker />
        <TopNewsCountriesList />
      </span>
    </header>
  );
};

AppBar.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('app-bar')(AppBar);
