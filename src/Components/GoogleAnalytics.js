import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const UseGoogleAnalytics = () => {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.initialize('UA-187568714-1');
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);
  }, [location]);
};
export default UseGoogleAnalytics;
