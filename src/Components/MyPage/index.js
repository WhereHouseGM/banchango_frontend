import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CheckPWModal from './Modal/CheckPW_Modal';
import ChangePWModal from './Modal/ChangePW_Modal';
import {
  Container,
  HelloTitleText,
  UserInfoContainer,
  InfoTitleText,
  LeftBanner,
  InfoBox,
  BannerTextEnabledBox,
  BannerTextDisabledBox,
  ButtonContainer,
  ChangePWButton,
  ConfirmButton,
  MobileUpperMenuWrapper,
  MobileUpperMenuButton,
  WithdrawalLabel,
} from './style';
import WithdrawalModal from './Modal/Withdrawal_Modal';

const MyPage = ({ userInfo, handleSubmit }) => {
  const history = useHistory();
  const [checkModalShow, setCheckModalShow] = useState(false);
  const [changeModalShow, setChangeModalShow] = useState(false);
  const [withdrawalModalShow, setWithDrawalModalShow] = useState(false);

  const [nameIn, setNameIn] = useState(userInfo.name);
  const [telephoneNumberIn, setTelephoneNumberIn] = useState(
    userInfo.telephoneNumber,
  );
  const [phoneNumberIn, setPhoneNumberIn] = useState(
    userInfo.phoneNumber || '',
  );
  const [companyNameIn, setCompanyNameIn] = useState(userInfo.companyName);

  const closeCheckModal = () => {
    setCheckModalShow(false);
  };
  const closeChangeModal = () => {
    setChangeModalShow(false);
  };
  const closeWithdrawalModal = () => {
    setWithDrawalModalShow(false);
  };
  const getUserInfo = () => {
    const userInfoSet = {
      email: userInfo.email,
      telephoneNumber: telephoneNumberIn,
      phoneNumber: phoneNumberIn,
      companyName: companyNameIn,
      name: nameIn,
      type: userInfo.type,
    };
    return userInfoSet;
  };
  return (
    <>
      <CheckPWModal
        className={'checkPWModal'}
        onClose={closeCheckModal}
        visible={checkModalShow}
        handleSubmit={handleSubmit}
        getUserInfo={getUserInfo}
      />
      <ChangePWModal
        className={'changePWModal'}
        onClose={closeChangeModal}
        visible={changeModalShow}
        handleSubmit={handleSubmit}
        getUserInfo={getUserInfo}
      />
      <WithdrawalModal
        className={'withdrawalModal'}
        onClose={closeWithdrawalModal}
        visible={withdrawalModalShow}
      />
      <Container>
        <LeftBanner>
          <BannerTextEnabledBox>내 프로필</BannerTextEnabledBox>
          {userInfo.type === 'SHIPPER' ? (
            <BannerTextDisabledBox
              onClick={() => {
                history.push('/mypage/quotation');
              }}
            >
              견적 요청 목록
            </BannerTextDisabledBox>
          ) : (
            <BannerTextDisabledBox
              onClick={() => {
                history.push('/mypage/houselist');
              }}
            >
              내 창고
            </BannerTextDisabledBox>
          )}

          <BannerTextDisabledBox
            onClick={() => {
              localStorage.clear();
              history.push('/');
            }}
          >
            로그아웃
          </BannerTextDisabledBox>
        </LeftBanner>
        <MobileUpperMenuWrapper>
          <MobileUpperMenuButton isIn>내 프로필</MobileUpperMenuButton>
          {userInfo.type === 'SHIPPER' ? (
            <MobileUpperMenuButton
              onClick={() => {
                history.push('/mypage/quotation');
              }}
            >
              견적 요청 목록
            </MobileUpperMenuButton>
          ) : (
            <MobileUpperMenuButton>내 창고</MobileUpperMenuButton>
          )}
        </MobileUpperMenuWrapper>
        <UserInfoContainer>
          <HelloTitleText>{userInfo.name}님 안녕하세요.</HelloTitleText>
          <InfoTitleText>이메일</InfoTitleText>
          <InfoBox defaultValue={userInfo.email} disabled />
          <InfoTitleText>성함</InfoTitleText>
          <InfoBox value={nameIn} onChange={(e) => setNameIn(e.target.value)} />
          <InfoTitleText>유선전화 번호</InfoTitleText>
          <InfoBox
            type="number"
            value={phoneNumberIn}
            onChange={(e) => setPhoneNumberIn(e.target.value)}
          />
          <InfoTitleText>휴대전화 번호</InfoTitleText>
          <InfoBox
            type="number"
            value={telephoneNumberIn}
            onChange={(e) => setTelephoneNumberIn(e.target.value)}
          />
          <InfoTitleText>회사명</InfoTitleText>
          <InfoBox
            value={companyNameIn}
            onChange={(e) => setCompanyNameIn(e.target.value)}
          />
          <ButtonContainer>
            <ChangePWButton
              onClick={() => {
                setChangeModalShow(true);
              }}
            >
              비밀번호 변경
            </ChangePWButton>
            <ConfirmButton
              onClick={() => {
                setCheckModalShow(true);
              }}
            >
              수정하기
            </ConfirmButton>
          </ButtonContainer>
          <WithdrawalLabel
            onClick={() => {
              setWithDrawalModalShow(true);
            }}
          >
            회원 탈퇴
          </WithdrawalLabel>
        </UserInfoContainer>
      </Container>
    </>
  );
};
MyPage.propTypes = {
  userInfo: PropTypes.object,
  handleSubmit: PropTypes.func,
};
export default MyPage;
