import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar';
import MainPage from '../../Components/MainPage';
import Footer from '../../Components/Footer';

const MainPresenter = () => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고중개플랫폼</title>
      </Helmet>
      <Navbar />
      <MainPage />
      <Footer />
    </>
  );
};

export default MainPresenter;
