import React from 'react';
import Background from '../../assets/images/login-background.jpg';
import MainImage from '../../assets/images/banchango-main.png';
import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  BackgroundImage,
  SignUpContainer,
  ImageContainer,
  Image,
  TextContainer,
  HeaderTitleTop,
  InputTitle,
  RePasswordText,
  Input,
  RegisterButton,
  TextBottomContainer,
  TextBottom,
} from './SignUp_Styles';

const SignUp = ({ handleSubmit, handleInput, handlePasswordInput }) => {
  return (
    <Container>
      <Wrapper>
        <BackgroundImage
          bgImage={Background}
          alt="Background Image."
        ></BackgroundImage>
        <SignUpContainer>
          <ImageContainer>
            <Image bgImage={MainImage} alt="Main image."></Image>
          </ImageContainer>
          <TextContainer>
            <HeaderTitleTop>간단한 정보를 입력해주세요.</HeaderTitleTop>

            <InputTitle>이메일</InputTitle>
            <Input
              id="email"
              type="email"
              placeholder="example@example.com"
              name="email"
              onChange={handleInput}
              required
            />
            <InputTitle>성함</InputTitle>
            <Input
              id="realName"
              type="realName"
              placeholder="홍길동"
              name="realName"
              onChange={handleInput}
              required
            />
            <InputTitle>비밀번호</InputTitle>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호 입력"
              name="password"
              onChange={handleInput}
              required
            />
            <InputTitle>비밀번호 재입력</InputTitle>
            <Input
              id="rePassword"
              type="password"
              placeholder=""
              name="rePassword"
              onChange={handlePasswordInput}
              required
            />
            <RePasswordText id="rePasswordText">
              비밀번호가 다릅니다.
            </RePasswordText>
            <InputTitle>유선전화 번호</InputTitle>
            <Input
              id="telephoneNumber"
              type="telephoneNumber"
              placeholder="02-123-4567"
              name="telephoneNumber"
              onChange={handleInput}
              required
            />
            <InputTitle>휴대전화 번호</InputTitle>
            <Input
              id="phoneNumber"
              type="phoneNumber"
              placeholder="010-1234-5678"
              name="phoneNumber"
              onChange={handleInput}
              required
            />
            <InputTitle>회사명</InputTitle>
            <Input
              id="companyName"
              type="companyName"
              placeholder="회사명"
              name="companyName"
              onChange={handleInput}
              required
            />

            <RegisterButton onClick={handleSubmit}>회원 가입</RegisterButton>
            <TextBottomContainer>
              <TextBottom>이용 약관 </TextBottom>|
              <TextBottom> 개인 정보 처리 방침</TextBottom>
            </TextBottomContainer>
          </TextContainer>
        </SignUpContainer>
      </Wrapper>
    </Container>
  );
};

SignUp.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
};

export default SignUp;
