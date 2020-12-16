import React from 'react';
import LoginBackground from '../../assets/images/login-background.jpg';
import MainImage from '../../assets/images/banchango-main.png';
import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  BackgroundImage,
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
} from './Login_Styles';

const Login = ({ handleSubmit, handleInput, toSignupPage }) => (
  <Container>
    <Wrapper>
      <BackgroundImage
        bgImage={LoginBackground}
        alt="Background Image."
      ></BackgroundImage>
      <LoginContainer>
        <ImageContainer>
          <LoginImage bgImage={MainImage} alt="Main image."></LoginImage>
        </ImageContainer>
        <TextContainer>
          <HeaderTitleTop>온라인 셀러를 위한</HeaderTitleTop>
          <HeaderTitleBottom>통합 물류 파트너</HeaderTitleBottom>
          <InputTitle>이메일</InputTitle>
          <Input
            id="email"
            type="email"
            placeholder="example@example.com"
            name="email"
            onChange={handleInput}
            required
          />
          <InputTitle>패스워드</InputTitle>
          <Input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInput}
            required
          />

          <PasswordFindText>비밀번호를 잃어버리셨나요?</PasswordFindText>
          <LoginButton onClick={handleSubmit}>로그인</LoginButton>
          <RegisterButton onClick={toSignupPage}>회원 가입</RegisterButton>
          <TextBottomContainer>
            <TextBottom>이용 약관 </TextBottom>|
            <TextBottom> 개인 정보 처리 방침</TextBottom>
          </TextBottomContainer>
        </TextContainer>
      </LoginContainer>
    </Wrapper>
  </Container>
);

Login.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toSignupPage: PropTypes.func.isRequired,
};

export default Login;
