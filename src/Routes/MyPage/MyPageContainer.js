import React from 'react';
import MyPagePresenter from './MyPagePresenter';
import { userApi } from '../../api';
import { message } from 'antd';

class MyPageContainer extends React.Component {
  state = {
    userInfo: null,
    error: null,
    loading: true,
  };
  handleSubmit = async (targetInfo, previousPW, closeModalFunc) => {
    const reqBody = {
      email: localStorage.getItem('Email'),
      password: previousPW,
    };
    await userApi
      .signIn(reqBody)
      .then(() => {
        closeModalFunc();
      await userApi
        .setUserInfo(
          localStorage.getItem('userId'),
          targetInfo,
          localStorage.getItem('AccessToken'),
        )
        .then(() => {
          message.destroy();
          message.success('정보 변경에 성공했습니다.');
        })
        .catch(() => {
          message.destroy();
          message.error('수정 정보 형식이 잘못되었습니다.');
        });
      })
      .catch(() => {
        message.destroy();
        message.error('올바르지 않은 비밀번호 입니다.');
      });
  };

  componentDidMount = async () => {
    try {
      const result = await userApi.getUserInfo(
        localStorage.getItem('userId'),
        localStorage.getItem('AccessToken'),
      );
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      const {
        data: { User: userInfo },
      } = result;
      this.setState({
        userInfo: userInfo,
        handleSubmit: this.handleSubmit,
        loading: false,
      });
    } catch (Error) {
      this.setState({
        error: '사용자 정보를 불러오지 못했습니다.',
        loading: false,
      });
    }
  };

  render() {
    const { userInfo, handleSubmit, error, loading } = this.state;
    return (
      <MyPagePresenter
        userInfo={userInfo}
        handleSubmit={handleSubmit}
        error={error}
        loading={loading}
      />
    );
  }
}
export default MyPageContainer;
