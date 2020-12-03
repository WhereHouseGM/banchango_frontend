import React from 'react';
import LoginPresenter from './LoginPresenter';
import sha256 from 'crypto';
import { userApi } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputType = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  checkEmail = (email) => {
    let form = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+.[A-Za-z0-9]+/;
    if (form.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  saveToken = (tokenSet, name) => {
    localStorage.setItem('AccessToken', tokenSet.AccessToken);
    localStorage.setItem('RefreshToken', tokenSet.RefreshToken);
    localStorage.setItem('Login', true);
    localStorage.setItem('name', name);
  };

  handleInput = (event) => {
    event.preventDefault();
    const {
      target: { name },
    } = event;
    const {
      target: { value },
    } = event;
    switch (name) {
      case InputType.EMAIL:
        this.setState({ email: value });
        return;
      case InputType.PASSWORD:
        this.setState({ password: value });
        return;
      default:
        return;
    }
  };

  notify = (name) =>
    toast.success(`${name}님 환영합니다!`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      draggable: false,
    });

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { password } = this.state;
    if (!this.checkEmail(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
    }
    const hashCode = sha256.createHash('sha256').update(password).digest('hex');
    const requestBody = {
      email: email,
      password: hashCode,
    };
    try {
      const result = await userApi.signIn(requestBody);
      const {
        data: { accessToken },
      } = result;
      const {
        data: { refreshToken },
      } = result;
      const {
        data: {
          User: { name },
        },
      } = result;
      const tokenSet = {
        AccessToken: accessToken,
        RefreshToken: refreshToken,
      };
      this.saveToken(tokenSet, name);
      window.location.replace('/');
    } catch {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      window.location.reload();
    }
  };

  render() {
    return (
      <>
        <LoginPresenter
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <ToastContainer />
      </>
    );
  }
}

export default LoginContainer;
