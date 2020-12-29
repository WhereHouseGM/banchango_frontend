import React from 'react';
import {
  Container,
  Wrapper,
  BackgroundImage,
  RegisterContainer,
  ImageContainer,
  RegisterImage,
  HeaderTitleBottom,
  HeaderTitleTop,
  TextContainer,
  TwoElementContainer,
  ItemContainer,
  InputTitle,
  Input,
  DescriptionInput,
  RadioButton,
  RadioButtonContainer,
  RadioButtonLabel,
  CheckboxContainer,
  CheckBoxLine,
  CheckBox,
} from './Register_Styles';
import RegisterBackground from '../../assets/images/login-background.jpg';
import MainImage from '../../assets/images/banchango-main.png';
import {
  warehouseTypes,
  mainItemTypes,
  facilityChecks,
} from '../../static/register';

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <BackgroundImage
          bgImage={RegisterBackground}
          alt="Background Image."
        ></BackgroundImage>
        <RegisterContainer>
          <ImageContainer>
            <RegisterImage
              bgImage={MainImage}
              alt="Main Image."
            ></RegisterImage>
          </ImageContainer>
          <TextContainer>
            <HeaderTitleTop>온라인 셀러를 위한</HeaderTitleTop>
            <HeaderTitleBottom>통합 물류 파트너</HeaderTitleBottom>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>창고명</InputTitle>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="창고명"
                  width="256px"
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>창고 평수</InputTitle>
                <Input
                  id="space"
                  type="number"
                  name="space"
                  placeholder="창고 평수(평 단위 숫자만 입력)"
                  width="256px"
                />
              </ItemContainer>
            </TwoElementContainer>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>주소(동 단위까지)</InputTitle>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="인천광역시 서구"
                  width="256px"
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>상세 주소</InputTitle>
                <Input
                  id="addressDetail"
                  type="text"
                  name="addressDetail"
                  placeholder="상세 주소"
                  width="256px"
                />
              </ItemContainer>
            </TwoElementContainer>
            <InputTitle>창고 소개(최대 400자)</InputTitle>
            <DescriptionInput
              id="description"
              type="text"
              placeholder="창고"
              width="480px"
              height="240px"
            />
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>영업 시작 시간</InputTitle>
                <Input
                  id="openAt"
                  name="openAt"
                  type="text"
                  placeholder="09:00"
                  width="256px"
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>영업 종료 시간</InputTitle>
                <Input
                  id="closeAt"
                  name="closeAt"
                  type="text"
                  placeholder="18:00"
                  width="256px"
                />
              </ItemContainer>
            </TwoElementContainer>
            <ItemContainer>
              <InputTitle>영업 시간 유의사항</InputTitle>
              <Input
                id="availableTimeDetail"
                name="availableTimeDetail"
                type="text"
                placeholder="물류 센터 사정에 따라 변경될 수 있습니다."
                width="320px"
              />
            </ItemContainer>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>보험사(1개)</InputTitle>
                <Input
                  type="text"
                  id="insurance"
                  name="insurance"
                  placeholder="화재 보험"
                  width="256px"
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>경비 업체(1개)</InputTitle>
                <Input
                  type="text"
                  id="securityCompanyName"
                  name="securityCompanyName"
                  placeholder="ADT 캡스"
                  width="256px"
                />
              </ItemContainer>
            </TwoElementContainer>
            <InputTitle>업종 선택</InputTitle>
            <RadioButtonContainer>
              {warehouseTypes.map((type, index) => (
                <React.Fragment key={index + `WH_TYPE`}>
                  <RadioButton
                    id={type.id}
                    type="radio"
                    value={type.value}
                    name="warehouseType"
                  />
                  <RadioButtonLabel htmlFor={type.id}>
                    {type.children}
                  </RadioButtonLabel>
                </React.Fragment>
              ))}
            </RadioButtonContainer>
            <InputTitle>대표 품목 선택(최대 3개)</InputTitle>
            <CheckboxContainer>
              {mainItemTypes.map((type, index) => (
                <>
                  <CheckBoxLine key={index + `MAIN_TYPE`}>
                    <CheckBox id={type.id} type="checkbox" value={type.value} />
                    <RadioButtonLabel htmlFor={type.id}>
                      {type.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                  {(index + 1) % 4 === 0 ? <br /> : null}
                </>
              ))}
            </CheckboxContainer>
            <InputTitle>창고 시설 해당사항 선택</InputTitle>
            <CheckboxContainer>
              {facilityChecks.map((check, index) => (
                <>
                  <CheckBoxLine key={index + `CHECK`}>
                    <CheckBox
                      id={check.id}
                      type="checkbox"
                      value={check.value}
                    />
                    <RadioButtonLabel htmlFor={check.id}>
                      {check.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                </>
              ))}
            </CheckboxContainer>
          </TextContainer>
        </RegisterContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
