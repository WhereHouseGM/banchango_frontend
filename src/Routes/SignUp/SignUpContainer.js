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
  email: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9]+/,
  telephoneNumber: /^\d{2,3}-\d{3,4}-\d{4}$/,
  phoneNumber: /^\d{2,3}-\d{3,4}-\d{4}$/,
};

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      realName: '',
      password: '',
      type: 'OWNER',
      telephoneNumber: '',
      companyName: '',
      phoneNumber: '',
    };
  }

  handlePasswordInput = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;

    let isVerified = value !== '' && this.state.password === value;

    if (isVerified) {
      this.swithToPasswordMatch();
    } else {
      this.switchToPasswordMisMatch();
    }
  };

  swithToPasswordMatch = () => {
    document.getElementById('rePasswordText').innerHTML = '확인됨.';

    document.getElementById('password').style.border = 'none';
    document.getElementById('rePassword').style.border = 'none';

    document.getElementById('password').style.borderBottom =
      '3px solid #33c41f';
    document.getElementById('rePassword').style.borderBottom =
      '3px solid #33c41f';
  };

  switchToPasswordMisMatch = () => {
    document.getElementById('rePasswordText').innerHTML =
      '비밀번호가 다릅니다.';
    document.getElementById('password').style.border = '2px solid red';
    document.getElementById('rePassword').style.border = '2px solid red';
  };

  handleInput = (event) => {
    event.preventDefault();

    const {
      target: { name },
    } = event;
    const {
      target: { value },
    } = event;

    let trimmedValue = value.trim();

    switch (name) {
      case InputType.EMAIL:
        this.setState({ email: trimmedValue });
        return;
      case InputType.REALNAME:
        this.setState({ realName: trimmedValue });
        return;
      case InputType.PASSWORD:
        let rePasswordValue = document.getElementById('rePassword').value;
        if (trimmedValue !== rePasswordValue) {
          this.switchToPasswordMisMatch();
          this.setState({ password: trimmedValue });
          return;
        } else {
          this.swithToPasswordMatch();
          this.setState({ password: trimmedValue });
          return;
        }
      case InputType.TELEPHONENUMBER:
        this.setState({ telephoneNumber: trimmedValue });
        return;
      case InputType.PHONENUMBER:
        this.setState({ phoneNumber: trimmedValue });
        return;
      case InputType.COMPANYNAME:
        this.setState({ companyName: trimmedValue });
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

    for (let item in this.state) {
      if (this.state[item] === '') {
        document.getElementById(item).focus();
        return;
      }
    }

    if (!regEx.email.test(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }

    if (!regEx.telephoneNumber.test(telephoneNumber)) {
      alert('전화번호 형식이 올바르지 않습니다.');
      return;
    }

    if (!regEx.phoneNumber.test(phoneNumber)) {
      alert('휴대폰 번호 형식이 올바르지 않습니다.');
      return;
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
      await userApi.signUp(requestBody);

      alert(`회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.`);

      window.location.replace('/login');
    } catch ({ response: { status } }) {
      if (status === 400) {
        alert('서버 오류: 관리자에게 문의해주세요.');
      } else if (status === 409) {
        alert('이미 존재하는 이메일입니다. 다시 확인해주세요.');
      }

      window.location.reload();
    }
  };

  render() {
    return (
      <SignUpPresenter
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        handlePasswordInput={this.handlePasswordInput}
      />
    );
  }
}

export default SignUpContainer;
