import React, { useEffect } from 'react';
import Router from './Router';
import { useLocation } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-187568714-1');

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
