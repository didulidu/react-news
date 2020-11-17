import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DASHBOARD } from 'routes';

function AppBar({ onLogout }) {
  return (
    <div>
      <Link to={DASHBOARD}>Vivify Ideas</Link>
      {/* <Link to={'USER_PROFILE'}>{formatMessage(messages.profileLink)}</Link> */}
      {/* <span onClick={onLogout}>{formatMessage(messages.logoutLink)}</span> */}
    </div>
  );
}

AppBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AppBar;
