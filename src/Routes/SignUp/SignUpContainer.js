import React from 'react';
import SignUpPresenter from './SignUpPresenter';
import sha256 from 'crypto';
import { userApi } from '../../api';

const InputType = {
  EMAIL: 'email',
  REALNAME: 'realName',
  PASSWORD: 'password',
  TELEPHONENUMBER: 'telephoneNumber',
  PHONENUMBER: 'phoneNumber',
  COMPANYNAME: 'companyName',
};

const regEx = {
  email: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+.[A-Za-z0-9]+/,
  telephoneNumber: /^\d{2,3}-\d{3,4}-\d{4}$/,
  phoneNumber: /^\d{3}-\d{3,4}-\d{4}$/,
};

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      type: 'OWNER',
      telephoneNumber: '',
      companyName: '',
      phoneNumber: '',
    };
  }

  saveToken = (tokenSet) => {
    localStorage.setItem('AccessToken', tokenSet.AccessToken);
    localStorage.setItem('RefreshToken', tokenSet.RefreshToken);
    localStorage.setItem('SignUp', true);
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
      case InputType.REALNAME:
        this.setState({ realName: value });
        return;
      case InputType.PASSWORD:
        this.setState({ password: value });
        return;
      case InputType.TELEPHONENUMBER:
        this.setState({ telephoneNumber: value });
        return;
      case InputType.PHONENUMBER:
        this.setState({ phoneNumber: value });
        return;
      case InputType.COMPANYNAME:
        this.setState({ companyName: value });
        return;
      default:
        return;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { realName } = this.state;
    const { password } = this.state;
    const { type } = this.state;
    const { telephoneNumber } = this.state;
    const { phoneNumber } = this.state;
    const { companyName } = this.state;

    if (!regEx.email.test(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
    }
    if (!regEx.telephoneNumber.test(telephoneNumber)) {
      alert('전화번호 형식이 올바르지 않습니다.');
    }
    if (!regEx.phoneNumber.test(phoneNumber)) {
      alert('휴대폰 번호 형식이 올바르지 않습니다.');
    }

    const hashCode = sha256.createHash('sha256').update(password).digest('hex');
    const requestBody = {
      email: email,
      name: realName,
      password: hashCode,
      type: type,
      telephoneNumber: telephoneNumber,
      companyName: companyName,
      phoneNumber: phoneNumber,
    };

    try {
      const result = await userApi.signUp(requestBody);

      alert(`회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.`);

      window.location.replace('/login');
    } catch (error) {

      alert(error);
      console.log(error.code);

      window.location.reload();
    }
  };

  render() {
    return (
      <SignUpPresenter
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignUpContainer;
