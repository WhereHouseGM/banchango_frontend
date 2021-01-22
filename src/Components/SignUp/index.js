import React, { useState } from 'react';
import Background from '../../assets/images/login-background.jpg';
import MainImage from '../../assets/images/banchango-main.png';
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
  SmallInformationText,
  Input,
  RegisterButton,
  TextBottomContainer,
  TextBottom,
  RadioButton,
  RadioButtonLabel,
  RadioButtonContainer,
  userTypes,
  CheckButtonWrapper,
  CheckButton,
  CheckButtonText,
} from './SignUp';
import { userApi } from '../../api';
import { message } from 'antd';
import sha256 from 'crypto';
import { useHistory, Link } from 'react-router-dom';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: null,
    email: null,
    password: null,
    type: null,
    phoneNumber: null,
    telephoneNumber: null,
    companyName: null,
  });

  const history = useHistory();

  const regEx = {
    email: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9]+/,
    phoneNumber: /^\d{2,3}\d{3,4}\d{4}/,
  };

  const signUp = () => {
    if (
      !document.getElementById('policyCheckButton').checked ||
      !document.getElementById('serviceCheckButton').checked
    ) {
      message.destroy();
      message.warning(
        '서비스 이용약관, 개인 정보 처리 방침에 동의하셔야 합니다.',
      );
      return;
    }
    if (inputs.email === null || inputs.email.trim() === '') {
      message.destroy();
      message.warning('이메일을 입력해주세요.');
      return;
    }
    if (inputs.name === null || inputs.name.trim() === '') {
      message.destroy();
      message.warning('성함을 입력해주세요.');
      return;
    }
    if (inputs.password === null || inputs.password.trim() === '') {
      message.destroy();
      message.warning('비밀번호를 입력해주세요.');
      return;
    }
    if (
      document.getElementById('rePassword').value === null ||
      document.getElementById('rePassword').value.trim() === ''
    ) {
      message.destroy();
      message.warning('비밀번호 재입력란을 입력해주세요.');
      return;
    }
    let reHashCode = sha256
      .createHash('sha256')
      .update(document.getElementById('rePassword').value)
      .digest('hex');
    if (inputs.password !== reHashCode) {
      message.destroy();
      message.warning('비밀번호가 재입력란과 동일하지 않습니다.');
      return;
    }
    if (inputs.phoneNumber === null || inputs.phoneNumber.trim() === '') {
      message.destroy();
      message.warning('유선전화 번호를 입력해주세요.');
      return;
    }
    if (
      inputs.telephoneNumber === null ||
      inputs.telephoneNumber.trim() === ''
    ) {
      message.destroy();
      message.warning('휴대전화 번호를 입력해주세요.');
      return;
    }
    if (inputs.companyName === null || inputs.companyName.trim() === '') {
      message.destroy();
      message.warning('회사명을 입력해주세요.');
      return;
    }
    if (inputs.type === null) {
      message.destroy();
      message.warning('업종을 선택해주세요.');
      return;
    }
    if (!regEx.email.test(inputs.email)) {
      message.destroy();
      message.warning('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (!regEx.phoneNumber.test(inputs.phoneNumber)) {
      message.destroy();
      message.warning('휴대전화 번호 형식이 올바르지 않습니다.');
      return;
    }
    if (!regEx.phoneNumber.test(inputs.telephoneNumber)) {
      message.destroy();
      message.warning('유선전화 번호 형식이 올바르지 않습니다.');
      return;
    }

    userApi
      .signUp(inputs)
      .then(() => {
        alert('회원가입이 완료되었습니다!\n 로그인 페이지로 이동합니다.');
        history.push('/login');
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
          message.warning('[400] 요청 형식이 잘못되었습니다.');
        } else if (status === 409) {
          alert('해당 이메일은 이미 가입되어 있습니다.');
          document.getElementById('email').focus();
        }
      });
  };

  const switchToPasswordMatch = () => {
    document.getElementById('rePasswordText').innerHTML = '확인됨.';
    document.getElementById('password').style.border = 'none';
    document.getElementById('rePassword').style.border = 'none';
    document.getElementById('password').style.borderBottom =
      '3px solid #33c41f';
    document.getElementById('rePassword').style.borderBottom =
      '3px solid #33c41f';
  };

  const switchToPasswordMisMatch = () => {
    document.getElementById('rePasswordText').innerHTML =
      '비밀번호가 다릅니다.';
    document.getElementById('password').style.border = '2px solid red';
    document.getElementById('rePassword').style.border = '2px solid red';
  };

  const switchToWrongPhoneNumberRegEx = () => {
    document.getElementById('phoneNumberText').innerHTML =
      '올바르지 않은 전화번호 형식입니다.';
    document.getElementById('phoneNumber').style.border = '2px solid red';
  };

  const switchToRightPhoneNumberRegEx = () => {
    document.getElementById('phoneNumberText').innerHTML =
      '올바른 전화번호 형식입니다.';
    document.getElementById('phoneNumber').style.border = '2px solid #33c41f';
  };

  const switchToWrongTelephoneNumberRegEx = () => {
    document.getElementById('telephoneNumberText').innerHTML =
      '올바르지 않은 유선전화번호 형식입니다.';
    document.getElementById('telephoneNumber').style.border = '2px solid red';
  };

  const switchToRightTelephoneNumberRegEx = () => {
    document.getElementById('telephoneNumberText').innerHTML =
      '올바른 유선전화번호 형식입니다.';
    document.getElementById('telephoneNumber').style.border =
      '2px solid #33c41f';
  };

  const switchToWrongEmailRegEx = () => {
    document.getElementById('emailText').innerHTML =
      '올바르지 않은 이메일 형식입니다.';
    document.getElementById('email').style.border = '2px solid red';
  };

  const switchToRightEmailRegEx = () => {
    document.getElementById('emailText').innerHTML =
      '올바른 이메일 형식입니다.';
    document.getElementById('email').style.border = '2px solid #33c41f';
  };

  return (
    <Container>
      <Wrapper>
        <BackgroundImage bgImage={Background} alt="Background Image." />
        <SignUpContainer>
          <ImageContainer>
            <Image bgImage={MainImage} alt="Main image." />
          </ImageContainer>
          <TextContainer>
            <HeaderTitleTop>간단한 정보를 입력해주세요.</HeaderTitleTop>
            <InputTitle>이메일</InputTitle>
            <Input
              id="email"
              type="email"
              placeholder="example@example.com"
              name="email"
              required
              onChange={(event) => {
                if (regEx.email.test(event.target.value)) {
                  switchToRightEmailRegEx();
                } else {
                  switchToWrongEmailRegEx();
                }
                setInputs({ ...inputs, email: event.target.value });
              }}
            />
            <SmallInformationText id="emailText">
              이메일을 입력해주세요.
            </SmallInformationText>
            <InputTitle>성함</InputTitle>
            <Input
              id="name"
              type="name"
              placeholder="홍길동"
              name="name"
              onChange={(event) => {
                setInputs({ ...inputs, name: event.target.value });
              }}
              required
            />
            <InputTitle>비밀번호</InputTitle>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호 입력"
              name="password"
              onChange={(event) => {
                let rePasswordValue = document.getElementById('rePassword')
                  .value;
                if (event.target.value !== rePasswordValue) {
                  switchToPasswordMisMatch();
                } else {
                  switchToPasswordMatch();
                }
                let hashCode = sha256
                  .createHash('sha256')
                  .update(event.target.value)
                  .digest('hex');
                setInputs({ ...inputs, password: hashCode });
              }}
              required
            />
            <InputTitle>비밀번호 재입력</InputTitle>
            <Input
              id="rePassword"
              type="password"
              placeholder=""
              name="rePassword"
              onChange={(event) => {
                let passwordValue = inputs.password;
                let rePasswordHash = sha256
                  .createHash('sha256')
                  .update(event.target.value)
                  .digest('hex');
                if (rePasswordHash !== passwordValue) {
                  switchToPasswordMisMatch();
                } else {
                  switchToPasswordMatch();
                }
              }}
              required
            />
            <SmallInformationText id="rePasswordText">
              비밀번호가 다릅니다.
            </SmallInformationText>
            <InputTitle>유선전화 번호</InputTitle>
            <Input
              id="telephoneNumber"
              type="number"
              placeholder="032"
              name="telephoneNumber"
              onChange={(event) => {
                if (regEx.phoneNumber.test(event.target.value)) {
                  switchToRightTelephoneNumberRegEx();
                } else {
                  switchToWrongTelephoneNumberRegEx();
                }
                setInputs({ ...inputs, telephoneNumber: event.target.value });
              }}
              required
            />
            <SmallInformationText id="telephoneNumberText">
              유선전화 번호를 입력해주세요.
            </SmallInformationText>
            <InputTitle>휴대전화 번호</InputTitle>
            <Input
              id="phoneNumber"
              type="number"
              placeholder="010"
              name="phoneNumber"
              onChange={(event) => {
                if (regEx.phoneNumber.test(event.target.value)) {
                  switchToRightPhoneNumberRegEx();
                } else {
                  switchToWrongPhoneNumberRegEx();
                }
                setInputs({ ...inputs, phoneNumber: event.target.value });
              }}
              required
            />
            <SmallInformationText id="phoneNumberText">
              휴대전화 번호를 입력해주세요.
            </SmallInformationText>
            <InputTitle>회사명</InputTitle>
            <Input
              id="companyName"
              type="text"
              placeholder="없을 시에는 없음 입력"
              name="companyName"
              onChange={(event) => {
                setInputs({ ...inputs, companyName: event.target.value });
              }}
              required
            />
            <InputTitle>업종 선택</InputTitle>
            <RadioButtonContainer>
              {userTypes.map((type, index) => (
                <React.Fragment key={`USERTYPE${index}`}>
                  <RadioButton
                    id={type.id}
                    type="radio"
                    value={type.value}
                    name="type"
                    onChange={(event) => {
                      setInputs({ ...inputs, type: event.target.value });
                    }}
                  />
                  <RadioButtonLabel htmlFor={type.value}>
                    {type.children}
                  </RadioButtonLabel>
                </React.Fragment>
              ))}
            </RadioButtonContainer>
            <CheckButtonWrapper>
              <CheckButton id="serviceCheckButton" type="checkbox" />
              <Link to="/service-agreements">
                <CheckButtonText>서비스 이용약관 (필수)</CheckButtonText>
              </Link>
            </CheckButtonWrapper>
            <CheckButtonWrapper>
              <CheckButton id="policyCheckButton" type="checkbox" />
              <Link to="/privacy-policy">
                <CheckButtonText>개인 정보 처리 방침 (필수)</CheckButtonText>
              </Link>
            </CheckButtonWrapper>
            <RegisterButton onClick={signUp}>회원 가입</RegisterButton>
            <TextBottomContainer>
              <TextBottom href="/service-agreements">이용 약관 </TextBottom>|
              <TextBottom href="/privacy-policy">
                개인 정보 처리 방침
              </TextBottom>
            </TextBottomContainer>
          </TextContainer>
        </SignUpContainer>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
