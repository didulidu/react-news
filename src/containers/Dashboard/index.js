import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

const key = 'dashbaord';

function Dashboard() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <main>
      <Helmet>
        <title>Dashboard - React Boilerplate</title>
      </Helmet>
      <h1>Dashboard Vlada</h1>
    </main>
  );
}

export default Dashboard;
