import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const UseGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-187568714-1');
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
    const currentPath = location.pathname + location.search;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);
  }, [location]);
};
export const searchWarehouseEvent = () => {
  ReactGA.event({
    category: '창고 검색',
    action: '창고 검색 버튼 클릭',
    label: '창고 검색',
    value: 1,
  });
};

export default UseGoogleAnalytics;
