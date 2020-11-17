import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import PublicRoute from 'containers/PublicRoute';
import WelcomePage from 'containers/WelcomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { WELCOME, DASHBOARD } from 'routes';

export default function Routes() {
  console.log('RUTER');
  return (
    <Switch>
      <PublicRoute exact path={WELCOME} component={WelcomePage} />
      <PrivateRoute exact path={DASHBOARD} component={Dashboard} />
      {/* <PublicRoute
        exact
        path={FORGOT_PASSWORD}
        component={ForgotPasswordPage}
      />
      <PublicRoute exact path={RESET_PASSWORD} component={ResetPasswordPage} /> */}
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
