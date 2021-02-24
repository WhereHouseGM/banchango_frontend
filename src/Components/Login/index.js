import React, { useState, useRef } from 'react';
import LoginBackground from '../../assets/images/login-background.jpg';
import MainImage from '../../assets/images/banchango-main.png';
import { userApi } from '../../api';
import {
  Container,
  LoginContainer,
  ImageContainer,
  LoginImage,
  TextContainer,
  HeaderTitleTop,
  HeaderTitleBottom,
  InputTitle,
  Input,
  PasswordFindText,
  LoginButton,
  RegisterButton,
  TextBottomContainer,
  TextBottom,
} from './Login';
import { ToLoginText } from './PWFind_Styles';
import { message } from 'antd';
import { useHistory } from 'react-router';
import sha256 from 'crypto';

const Login = () => {
  const [pwLostClick, setPWLostClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const buttonRef = useRef();

  const checkEmail = () => {
    let form = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+.[A-Za-z0-9]+/;
    return form.test(email);
  };

  const handleEmailSend = () => {
    if (!checkEmail(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    message.loading('알림창이 뜰 때까지 잠시만 기다려 주세요..', 10);
    const requestBody = {
      email: email,
    };
    userApi
      .requestEmail(requestBody)
      .then(() => {
        alert('이메일이 정상적으로 발송되었습니다.');
        message.destroy();
      })
      .catch(({ response: { status } }) => {
        message.destroy();
        if (status === 400) {
          alert('[400] : 요청 형식이 잘못되었습니다.');
        } else if (status === 404) {
          alert('반창고에 회원가입 되어 있지 않은 이메일입니다.');
          emailRef.current.value = '';
          passwordRef.current.value = '';
          document.getElementById('email').focus();
        }
      });
  };

  const saveTokenAndUserInfo = (
    tokenSet,
    { name, email, userId, type, role },
  ) => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    if (!checkEmail(email)) {
      message.warning('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (password === '') {
      message.warning('비밀번호를 입력해 주세요.');
    }
    const requestBody = {
      email: email,
      password: `${sha256.createHash('sha256').update(password).digest('hex')}`,
    };
    userApi
      .signIn(requestBody)
      .then(({ data: { accessToken, refreshToken, user } }) => {
        const tokenSet = {
          AccessToken: accessToken,
          RefreshToken: refreshToken,
        };
        saveTokenAndUserInfo(tokenSet, user);
        const query = window.location.search;
        if (query === '') {
          history.push('/');
        } else {
          const redirectURL = query.split('=')[1];
          history.push(redirectURL);
        }
      })
      .catch(({ response: { status } }) => {
        console.log(status);
        if (status === 400) {
          alert('[400] : 요청 형식이 잘못되었습니다.');
        } else if (status === 404) {
          alert('이메일 또는 비밀번호가 일치하지 않습니다.');
          passwordRef.current.value = '';
          document.getElementById('email').focus();
        }
      });
  };

  return (
    <Container bgImage={LoginBackground} alt="Background Image.">
      <LoginContainer>
        <ImageContainer>
          <LoginImage bgImage={MainImage} alt="Main image."></LoginImage>
        </ImageContainer>
        <TextContainer>
          <HeaderTitleTop>온라인 셀러를 위한</HeaderTitleTop>
          <HeaderTitleBottom>통합 물류 파트너</HeaderTitleBottom>
          {pwLostClick ? (
            <>
              <InputTitle>이메일</InputTitle>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <LoginButton onClick={handleEmailSend}>
                임시 비밀번호 받기
              </LoginButton>
              <ToLoginText onClick={() => setPWLostClick(!pwLostClick)}>
                로그인 화면으로 돌아가기
              </ToLoginText>
              <TextBottomContainer>
                <TextBottom href="/service-agreements">이용 약관 </TextBottom>|
                <TextBottom href="/privacy-policy">
                  &nbsp; 개인 정보 처리 방침
                </TextBottom>
              </TextBottomContainer>
            </>
          ) : (
            <>
              <InputTitle>이메일</InputTitle>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                ref={emailRef}
              />
              <InputTitle>패스워드</InputTitle>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    buttonRef.current.click();
                  }
                }}
                required
                ref={passwordRef}
              />
              <PasswordFindText onClick={() => setPWLostClick(!pwLostClick)}>
                비밀번호를 잃어버리셨나요?
              </PasswordFindText>
              <LoginButton
                id="btnLogin"
                onClick={(e) => handleLogin(e)}
                ref={buttonRef}
              >
                로그인
              </LoginButton>
              <RegisterButton
                onClick={() => {
                  history.push('/signup');
                }}
              >
                회원 가입
              </RegisterButton>
              <TextBottomContainer>
                <TextBottom href="/service-agreements">이용 약관 </TextBottom>|
                <TextBottom href="/privacy-policy">
                  개인 정보 처리 방침
                </TextBottom>
              </TextBottomContainer>
            </>
          )}
        </TextContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
