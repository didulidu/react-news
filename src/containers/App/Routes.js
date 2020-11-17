import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import PublicRoute from 'containers/PublicRoute';
import TopNews from 'containers/TopNews/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { TOP_NEWS, CATEGORIES } from 'routes';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute exact path={TOP_NEWS} component={TopNews} />
      {/* <PublicRoute exact path={CATEGORIES} component={Dashboard} /> */}

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
