import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const UseGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-187568714-1');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentPath = location.pathname + location.search;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);
  }, [location]);
};
export default UseGoogleAnalytics;
