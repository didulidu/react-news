import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PublicRoute from 'containers/PublicRoute';
import TopNews from 'containers/TopNews/Loadable';
import SingleNews from 'containers/SingleNews/Loadable';
import Search from 'containers/Search/Loadable';
import Categories from 'containers/Categories/Loadable';
import SingleCategory from 'containers/SingleCategory/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { TOP_NEWS, CATEGORIES, NEWS, SEARCH } from 'routes';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute exact path={TOP_NEWS} component={TopNews} />
      <PublicRoute exact path={NEWS} component={SingleNews} />
      <PublicRoute exact path={SEARCH} component={Search} />
      <PublicRoute exact path={CATEGORIES} component={Categories} />
      <PublicRoute path={`${CATEGORIES}/:id`} component={SingleCategory} />
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
