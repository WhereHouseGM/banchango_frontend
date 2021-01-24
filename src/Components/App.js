import React from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from '../Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
};
export default App;
