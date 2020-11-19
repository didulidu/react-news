import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import Notifier from 'containers/Notifier';
import Routes from './Routes';
import AppBar from 'components/AppBar';

function App() {
  return (
    <HelmetProvider>
      <SnackbarProvider>
        <Helmet>
          <title>News!</title>
        </Helmet>
        <>
          <AppBar />
          <Routes />
        </>
        <Notifier />
      </SnackbarProvider>
    </HelmetProvider>
  );
}

export default App;
