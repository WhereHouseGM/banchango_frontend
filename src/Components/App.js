import React, { Component } from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import ReactGA from 'react-ga';

class App extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-187568714-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  };
  render() {
    return (
      <>
        <GlobalStyles />
        <Router />
      </>
    );
  }
}
export default App;
