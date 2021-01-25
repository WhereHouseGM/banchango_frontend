import React from 'react';
import LoginPresenter from './LoginPresenter';
import sha256 from 'crypto';
import { userApi } from '../../api';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';
import { userLogin } from '../../Redux/User/userActions';
import { connect } from 'react-redux';

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
    let inputPassword = document.getElementById('password');
    document
      .getElementById('password')
      .removeEventListener('keyup', inputPassword);
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
    this.alertWaitingMessage();
    const requestBody = {
      email: email,
    };
    userApi
      .requestEmail(requestBody)
      .then(() => {
        alert('이메일이 정상적으로 발송되었습니다.');
        this.destroyWaitingMessage();
      })
      .catch(({ response: { status } }) => {
        this.destroyWaitingMessage();
        if (status === 400) {
          alert('[400] : 요청 형식이 잘못되었습니다.');
        } else if (status === 404) {
          alert('반창고에 회원가입 되어 있지 않은 이메일입니다.');
          document.getElementById('email').value = '';
          document.getElementById('email').focus();
        }
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { password } = this.state;
    if (!this.checkEmail(email)) {
      message.warning('이메일 형식이 올바르지 않습니다.');
      document.getElementById('email').focus();
      return;
    }
    const hashCode = sha256.createHash('sha256').update(password).digest('hex');
    const requestBody = {
      email: email,
      password: hashCode,
    };
    // await this.props.userLogin(requestBody);
    console.log(this.props.userData);
    console.log(typeof this.props.userLogin(requestBody));
    userApi
      .signIn(requestBody)
      .then(({ data: { accessToken, refreshToken, user } }) => {
        let tokenSet = {
          AccessToken: accessToken,
          RefreshToken: refreshToken,
        };
        this.saveToken(tokenSet, user);
        // window.location.href = '/';
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
          alert('[400] : 요청 형식이 잘못되었습니다.');
        } else if (status === 404) {
          alert('이메일 또는 비밀번호가 일치하지 않습니다.');
          document.getElementById('password').value = '';
          document.getElementById('email').focus();
        }
      });
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
const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (requestBody) => dispatch(userLogin(requestBody)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
