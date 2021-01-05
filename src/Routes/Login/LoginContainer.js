import React from 'react';
import LoginPresenter from './LoginPresenter';
import sha256 from 'crypto';
import { userApi } from '../../api';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';

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

  componentDidMount = () => {
    let inputPassword = document.getElementById('password');
    inputPassword.addEventListener('keyup', (event) => {
      if (event.key !== undefined && event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('btnLogin').click();
      }
    });
  };

  componentWillUnmount = () => {
    document.getElementById('password').removeEventListener('keyup');
  };

  checkEmail = (email) => {
    let form = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+.[A-Za-z0-9]+/;
    if (form.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  saveToken = (tokenSet, { name, email, userId, type, role }) => {
    localStorage.setItem('AccessToken', tokenSet.AccessToken);
    localStorage.setItem('RefreshToken', tokenSet.RefreshToken);
    localStorage.setItem('Login', true);
    localStorage.setItem('Name', name);
    localStorage.setItem('Role', role);
    localStorage.setItem('Email', email);
    localStorage.setItem('userId', userId);
    localStorage.setItem('type', type);
    localStorage.setItem('LoginFirst', true);
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

  alertWaitingMessage = () => {
    message.loading('알림창이 뜰 때까지 잠시만 기다려 주세요...');
  };

  destroyWaitingMessage = () => {
    message.destroy();
  };

  handleEmailSend = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (!this.checkEmail(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    const requestBody = {
      email: email,
    };
    try {
      this.alertWaitingMessage();
      const result = await userApi.requestEmail(requestBody);
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      this.destroyWaitingMessage();
      alert('이메일이 정상적으로 발송되었습니다.');
    } catch {
      this.destroyWaitingMessage();
      alert('반창고에 회원가입 되어 있지 않은 이메일입니다.');
      document.getElementById('email').value = '';
      document.getElementById('email').focus();
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { password } = this.state;
    if (!this.checkEmail(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
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
        data: { user },
      } = result;
      const tokenSet = {
        AccessToken: accessToken,
        RefreshToken: refreshToken,
      };
      this.saveToken(tokenSet, user);
      window.location.replace('/');
    } catch {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      document.getElementById('password').value = '';
      document.getElementById('email').focus();
    }
  };

  toSignupPage = () => {
    window.location.href = '/signup';
  };

  render() {
    return (
      <LoginPresenter
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        toSignupPage={this.toSignupPage}
        handleEmailSend={this.handleEmailSend}
      />
    );
  }
}

export default LoginContainer;
