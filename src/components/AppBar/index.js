import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { TOP_NEWS, CATEGORIES, SEARCH, NEWS } from 'routes';
import { withTranslation } from 'react-i18next';
import LanguagePicker from 'components/Language';
import TopNewsCountriesList from 'components/TopNewsCountriesList';
import { getCategoryNews } from 'containers/Categories/actions';
import { getTopNews } from 'containers/TopNews/actions';
import { Switch } from '@material-ui/core';
import { searchNews } from 'containers/Search/actions';

const AppBar = ({ t, history }) => {
  const getNewsAction = () => {
    switch (history.location.pathname) {
      case TOP_NEWS:
        return getTopNews;
      case SEARCH:
        return searchNews;
      default:
        return getCategoryNews;
    }
  };

  const newsAction = getNewsAction();
  return (
    <header>
      <Link to={TOP_NEWS}>{t('topNews')}</Link>
      <Link to={CATEGORIES}>{t('categories')}</Link>
      <Link to={SEARCH}>{t('search')}</Link>
      <span className="bar-right">
        <LanguagePicker />
        <TopNewsCountriesList
          getNewsAction={newsAction}
          disabled={history.location.pathname === NEWS}
        />
      </span>
    </header>
  );
};

AppBar.propTypes = {
  t: PropTypes.func,
};

export default withRouter(withTranslation('app-bar')(AppBar));
