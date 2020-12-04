import React from 'react';
import styled from 'styled-components';

// Reuse for signup page
import LoginBackground from '../../assets/images/login-background.jpg';

import MainImage from '../../assets/images/banchango-main.png';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 100vh;
  overflow: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  width: 100%;
  display: flex;
  align-content: center;
`;

const BackgroundImage = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

const LoginContainer = styled.div`
  background-color: #1d489b;
  width: 375px;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 200px;
`;

const ImageContainer = styled.div`
  background-color: #1d489b;
  height: 112px;
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
`;

const LoginImage = styled.div`
  width: 270px;
  height: 90px;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  align-self: center;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  align-items: center;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  background-color: white;
`;

const HeaderTitleTop = styled.div`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  line-height: 1.8;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;

const InputTitle = styled.div`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
  align-self: start;
  margin-left: 60px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #1d489b;
  width: 256px;
  margin-top: 10px;
  transition: all 0.2s ease;
  &:focus {
    background-color: lightgray;
    border-bottom: 3px solid #1d489b;
  }
`;

const RegisterButton = styled.button`
  border-radius: 18px;
  border: 2px solid #1d489b;
  background-color: #1d489b;
  color: white;
  text-align: center;
  padding: 10px 80px 10px 80px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  transition: all 0.2s ease;
  margin-top: 30px;
  &:hover {
    padding: 8px 78px 8px 78px;
    cursor: pointer;
  }
`;

const TextBottomContainer = styled.span`
  margin-top: 30px;
  margin-bottom: 5px;
`;
const TextBottom = styled.a`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 12px;
  color: gray;
`;

const SignUp = ({ handleSubmit, handleInput }) => {
  return (
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
            <InputTitle>패스워드</InputTitle>
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleInput}
              required
            />
            <InputTitle>전화번호 (02)</InputTitle>
            <Input
              type="telephoneNumber"
              placeholder="02-123-4567"
              name="telephoneNumber"
              onChange={handleInput}
              required
            />
            <InputTitle>전화번호 (010)</InputTitle>
            <Input
              type="phoneNum"
              placeholder="010-1234-5678"
              name="phoneNum"
              onChange={handleInput}
              required
            />
            <InputTitle>회사 이름</InputTitle>
            <Input
              type="companyName"
              placeholder="회사 이름"
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
        </LoginContainer>
      </Wrapper>
    </Container>
  );
};
SignUp.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SignUp;