import React from 'react';
import AdminPresenter from './AdminPresenter';
import sha256 from 'crypto';
import { userApi } from '../../api';
//import { warehouseApi } from '../../api';

const InputType = {
  USER_EMAIL: 'userEmail',
  USER_PASS: 'userPass',
};

class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  handleLoginInput = (event) => {
    event.preventDefault();
    const {
      target: { name },
    } = event;
    const {
      target: { value },
    } = event;
    switch (name) {
      case InputType.USER_EMAIL:
        this.setState({ userEmail: value });
        return;
      case InputType.USER_PASS:
        this.setState({ userPassword: value });
        return;
      default:
        return;
    }
  };

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = this.state;
    const hashCode = sha256
      .createHash('sha256')
      .update(userPassword)
      .digest('hex');
    const requestBody = {
      email: userEmail,
      password: hashCode,
    };
    try {
      const result = await userApi.signIn(requestBody);
      const {
        data: { accessToken },
      } = result;
      localStorage.setItem('TokenForRegister', accessToken);
    } catch {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      document.getElementById('userPass').value = '';
      document.getElementById('userEmail').focus();
    }
  };

  render() {
    return (
      <AdminPresenter
        handleLoginInput={this.handleLoginInput}
        handleLoginSubmit={this.handleLoginSubmit}
      />
    );
  }
}

export default AdminContainer;
