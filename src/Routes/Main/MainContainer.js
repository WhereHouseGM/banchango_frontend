import React, { useEffect } from 'react';
import MainPresenter from './MainPresenter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (name) => {
  toast.info(`✔️ ${name}님 환영합니다!`, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: true,
    draggable: false,
  });
};

const MainContainer = () => {
  useEffect(() => {
    if (localStorage.getItem('name')) {
      notify(localStorage.getItem('name'));
      localStorage.removeItem('name');
    }
  }, []);

  return (
    <>
      <MainPresenter />
      <ToastContainer />
    </>
  );
};

export default MainContainer;
