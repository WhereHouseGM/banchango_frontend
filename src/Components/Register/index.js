import React, { useState } from 'react';
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
  AddButton,
  ButtonAndInputContainer,
  RemoveButton,
  SubmitButton,
} from './Register';
import { registerEvent } from '../GoogleAnalytics';
import RegisterBackground from '../../assets/images/login-background.jpg';

import MainImage from '../../assets/images/banchango-main.png';

import {
  warehouseTypes,
  mainItemTypes,
  facilityChecks,
  airConditioningTypes,
  availableWeekdays,
  warehouseConditions,
} from '../../static/register';

import { warehouseApi } from '../../api';
import { message } from 'antd';

const Register = () => {
  const [inputs, setInputs] = useState({
    name: null,
    space: null,
    address: null,
    addressDetail: null,
    description: null,
    availableWeekdays: null,
    openAt: null,
    closeAt: null,
    availableTimeDetail: null,
    insurances: [''],
    cctvExist: false,
    securityCompanies: [''],
    doorLockExist: false,
    airConditioningType: null,
    workerExist: false,
    canPark: false,
    mainItemTypes: [],
    warehouseType: null,
    minReleasePerMonth: null,
    deliveryTypes: [''],
    warehouseFacilityUsages: [''],
    warehouseUsageCautions: [''],
    warehouseCondition: [],
    latitude: 88.88,
    longitude: 99.99,
  });
  const [uploading, setUploading] = useState(false);
  const addInsurances = () => {
    let temp = inputs.insurances;
    temp.push('');
    setInputs({ ...inputs, insurances: temp });
  };

  const removeInsurances = (idx) => {
    let temp = inputs.insurances;
    temp.splice(idx, 1);
    setInputs({ ...inputs, insurances: temp });
  };

  const addSecurityCompanies = () => {
    let temp = inputs.securityCompanies;
    temp.push('');
    setInputs({ ...inputs, securityCompanies: temp });
  };

  const removeSecurityCompanies = (idx) => {
    let temp = inputs.securityCompanies;
    temp.splice(idx, 1);
    setInputs({ ...inputs, securityCompanies: temp });
  };

  const addDeliveryTypes = () => {
    let temp = inputs.deliveryTypes;
    temp.push('');
    setInputs({ ...inputs, deliveryTypes: temp });
  };

  const removeDeliveryTypes = (idx) => {
    let temp = inputs.deliveryTypes;
    temp.splice(idx, 1);
    setInputs({ ...inputs, deliveryTypes: temp });
  };

  const addWarehouseFacilityUsages = () => {
    let temp = inputs.warehouseFacilityUsages;
    temp.push('');
    setInputs({ ...inputs, warehouseFacilityUsages: temp });
  };

  const removeWarehouseFacilityUsages = (idx) => {
    let temp = inputs.warehouseFacilityUsages;
    temp.splice(idx, 1);
    setInputs({ ...inputs, warehouseFacilityUsages: temp });
  };

  const addWarehouseUsageCautions = () => {
    let temp = inputs.warehouseUsageCautions;
    temp.push('');
    setInputs({ ...inputs, warehouseUsageCautions: temp });
  };

  const removeWarehouseUsageCautions = (idx) => {
    let temp = inputs.warehouseUsageCautions;
    temp.splice(idx, 1);
    setInputs({ ...inputs, warehouseUsageCautions: temp });
  };

  const register = () => {
    let requestBody = inputs;
    if (inputs.name === null || inputs.name.trim() === '') {
      message.warning('창고명을 입력해주세요.');
      return;
    } else if (inputs.space === null) {
      message.warning('창고 평수를 입력해주세요.');
      return;
    } else if (inputs.address === null || inputs.address.trim() === '') {
      message.warning('주소를 입력해주세요.');
      return;
    } else if (
      inputs.addressDetail === null ||
      inputs.addressDetail.trim() === ''
    ) {
      message.warning('상세 주소를 입력해주세요.');
      return;
    } else if (
      inputs.description === null ||
      inputs.description.trim() === ''
    ) {
      message.warning('창고 소개를 입력해주세요.');
      return;
    } else if (inputs.openAt === null || inputs.openAt.trim() === '') {
      message.warning('영업 시작 시간을 입력해주세요.');
      return;
    } else if (inputs.closeAt === null || inputs.closeAt.trim() === '') {
      message.warning('영업 종료 시간을 입력해주세요.');
      return;
    } else if (
      inputs.availableTimeDetail === null ||
      inputs.availableTimeDetail.trim() === ''
    ) {
      message.warning('영업 시간 유의사항을 입력해주세요');
      return;
    } else if (inputs.availableWeekdays === null) {
      message.warning('영업요일을 선택해주세요.');
      return;
    } else if (inputs.minReleasePerMonth === null) {
      message.warning('월 최소 출고량을 입력해 주세요.');
      return;
    } else if (inputs.insurances.length === 0) {
      message.warning('보험사를 1개 이상 입력해주세요.');
      return;
    } else if (inputs.securityCompanies.length === 0) {
      message.warning('경비 업체를 1개 이상 입력해주세요.');
      return;
    } else if (inputs.warehouseType === null) {
      message.warning('업종을 선택해주세요.');
      return;
    } else if (inputs.airConditioningType === null) {
      message.warning('냉난방 지원 방식을 선택해주세요.');
      return;
    } else if (inputs.mainItemTypes.length === 0) {
      message.warning('대표 품목을 1개 이상 선택해주세요.');
      return;
    } else if (inputs.warehouseCondition.length === 0) {
      message.warning('창고 유형을 1개 이상 선택해주세요.');
      return;
    } else if (inputs.deliveryTypes.length === 0) {
      message.warning('제휴 택배사를 1개 이상 입력해주세요.');
      return;
    }
    message.loading('잠시만 기다려주세요.', 10);
    setUploading(true);
    return warehouseApi
      .register(requestBody, localStorage.getItem('AccessToken'))
      .then(() => {
        message.destroy();
        alert('창고 등록 요청이 정상적으로 처리되었습니다.');
        return 'SUCCESS';
      })
      .catch(({ response: { status } }) => {
        message.destroy();
        if (status === 400) {
          alert('[400]요청 형식이 잘못되었습니다.');
        } else if (status === 401) {
          alert('[401] 로그인을 다시 해주세요.');
        } else if (status === 403) {
          alert('[403] 해당 요청을 수행할 수 있는 권한이 없습니다.');
        } else if (status === 500) {
          alert('[500]서버 오류가 발생했습니다\n관리자에게 문의해 주세요.');
        }
      })
      .finally(() => {
        setUploading(false);
      });
  };

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
                <InputTitle>
                  창고명<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="창고명"
                  width="256px"
                  onChange={(event) => {
                    setInputs({ ...inputs, name: event.target.value });
                  }}
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  창고 평수<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="space"
                  type="number"
                  name="space"
                  placeholder="창고 평수(평 단위 숫자만 입력)"
                  width="256px"
                  onChange={(event) => {
                    setInputs({
                      ...inputs,
                      space: parseInt(event.target.value),
                    });
                  }}
                />
              </ItemContainer>
            </TwoElementContainer>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>
                  주소(동 단위까지)<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="인천광역시 서구"
                  width="256px"
                  onChange={(event) => {
                    setInputs({ ...inputs, address: event.target.value });
                  }}
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  상세 주소<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="addressDetail"
                  type="text"
                  name="addressDetail"
                  placeholder="상세 주소"
                  width="256px"
                  onChange={(event) => {
                    setInputs({ ...inputs, addressDetail: event.target.value });
                  }}
                />
              </ItemContainer>
            </TwoElementContainer>
            <InputTitle>
              창고 소개(최대 400자)<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <DescriptionInput
              id="description"
              type="text"
              name="description"
              placeholder="창고"
              width="480px"
              height="240px"
              onChange={(event) => {
                if (event.target.value.length >= 399) {
                  message.warning(
                    '창고 소개는 최대 400자 까지 입력 가능합니다.',
                  );
                  event.target.value = event.target.value.slice(0, 399);
                  return;
                }
                setInputs({ ...inputs, description: event.target.value });
              }}
            />
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>
                  영업 시작 시간<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="openAt"
                  name="openAt"
                  type="text"
                  placeholder="09:00"
                  width="256px"
                  onChange={(event) => {
                    setInputs({ ...inputs, openAt: event.target.value });
                  }}
                />
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  영업 종료 시간<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                <Input
                  id="closeAt"
                  name="closeAt"
                  type="text"
                  placeholder="18:00"
                  width="256px"
                  onChange={(event) => {
                    setInputs({ ...inputs, closeAt: event.target.value });
                  }}
                />
              </ItemContainer>
            </TwoElementContainer>
            <ItemContainer>
              <InputTitle>
                영업 시간 유의사항<span style={{ color: 'red' }}>*</span>
              </InputTitle>
              <Input
                id="availableTimeDetail"
                name="availableTimeDetail"
                type="text"
                placeholder="물류 센터 사정에 따라 변경될 수 있습니다."
                width="316px"
                onChange={(event) => {
                  setInputs({
                    ...inputs,
                    availableTimeDetail: event.target.value,
                  });
                }}
              />
            </ItemContainer>
            <InputTitle>
              영업요일 선택<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <RadioButtonContainer style={{ flexWrap: 'wrap' }}>
              {availableWeekdays.map((day, index) => (
                <div key={index + `AWD_TYPE`} style={{ lineHeight: '1.5' }}>
                  <React.Fragment>
                    <RadioButton
                      id={day.id}
                      type="radio"
                      value={day.value}
                      name="availableWeekdays"
                      onChange={(event) => {
                        setInputs({
                          ...inputs,
                          availableWeekdays: parseInt(event.target.value),
                        });
                      }}
                    />
                    <RadioButtonLabel htmlFor={day.id}>
                      {day.children}
                    </RadioButtonLabel>
                  </React.Fragment>
                </div>
              ))}
            </RadioButtonContainer>
            <ItemContainer>
              <InputTitle>
                월 최소 출고량<span style={{ color: 'red' }}>*</span>
              </InputTitle>
              <Input
                id="minReleasePerMonth"
                name="minReleasePerMonth"
                type="number"
                placeholder="없으면 1 입력"
                width="316px"
                onChange={(event) => {
                  setInputs({
                    ...inputs,
                    minReleasePerMonth: parseInt(event.target.value),
                  });
                }}
              />
            </ItemContainer>
            <TwoElementContainer>
              <ItemContainer>
                <InputTitle>
                  보험사 / 보험명<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                {inputs.insurances.map((insurance, idx) => {
                  return (
                    <ButtonAndInputContainer key={`INSURANCES${idx}`}>
                      <Input
                        type="text"
                        width="256px"
                        value={insurance}
                        onChange={(event) => {
                          let temp = inputs.insurances;
                          temp[idx] = event.currentTarget.value;
                          setInputs({ ...inputs, insurances: temp });
                        }}
                      />
                      &nbsp;
                      {idx === 0 ? (
                        <AddButton onClick={() => addInsurances()}>
                          추가
                        </AddButton>
                      ) : null}
                      {idx !== 0 ? (
                        <RemoveButton onClick={() => removeInsurances(idx)}>
                          삭제
                        </RemoveButton>
                      ) : null}
                    </ButtonAndInputContainer>
                  );
                })}
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  경비 업체<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                {inputs.securityCompanies.map((company, idx) => {
                  return (
                    <ButtonAndInputContainer key={`SEC_COMP${idx}`}>
                      <Input
                        type="text"
                        width="256px"
                        value={company}
                        onChange={(event) => {
                          let temp = inputs.securityCompanies;
                          temp[idx] = event.currentTarget.value;
                          setInputs({ ...inputs, securityCompanies: temp });
                        }}
                      />
                      &nbsp;
                      {idx === 0 ? (
                        <AddButton onClick={() => addSecurityCompanies()}>
                          추가
                        </AddButton>
                      ) : null}
                      {idx !== 0 ? (
                        <RemoveButton
                          onClick={() => removeSecurityCompanies(idx)}
                        >
                          삭제
                        </RemoveButton>
                      ) : null}
                    </ButtonAndInputContainer>
                  );
                })}
              </ItemContainer>
            </TwoElementContainer>
            <InputTitle>
              업종 선택<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <RadioButtonContainer>
              {warehouseTypes.map((type, index) => (
                <React.Fragment key={index + `WH_TYPE`}>
                  <RadioButton
                    id={type.id}
                    type="radio"
                    value={type.value}
                    name="warehouseType"
                    onChange={(event) => {
                      setInputs({
                        ...inputs,
                        warehouseType: event.target.value,
                      });
                    }}
                  />
                  <RadioButtonLabel htmlFor={type.id}>
                    {type.children}
                  </RadioButtonLabel>
                </React.Fragment>
              ))}
            </RadioButtonContainer>
            <InputTitle>
              냉난방 지원 방식 선택<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <RadioButtonContainer>
              {airConditioningTypes.map((type, index) => (
                <React.Fragment key={index + `AC_TYPE`}>
                  <RadioButton
                    id={type.id}
                    type="radio"
                    value={type.value}
                    name="airConditioningType"
                    onChange={(event) => {
                      setInputs({
                        ...inputs,
                        airConditioningType: event.target.value,
                      });
                    }}
                  />
                  <RadioButtonLabel htmlFor={type.id}>
                    {type.children}
                  </RadioButtonLabel>
                </React.Fragment>
              ))}
            </RadioButtonContainer>
            <InputTitle>
              대표 품목 선택(최대 3개)<span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <CheckboxContainer>
              {mainItemTypes.map((type, index) => (
                <React.Fragment key={index + 'MAIN_TYPE'}>
                  <CheckBoxLine>
                    <CheckBox
                      id={type.id}
                      type="checkbox"
                      value={type.value}
                      name="mainItemTypes"
                      onChange={(event) => {
                        let tempInputs = inputs;
                        if (event.target.checked) {
                          if (tempInputs.mainItemTypes.length >= 3) {
                            alert('대표 품목은 최대 3개까지 선택 가능합니다.');
                          }
                          tempInputs.mainItemTypes.push(event.target.value);
                        } else {
                          let index = tempInputs.mainItemTypes.indexOf(
                            event.target.value,
                          );
                          tempInputs.mainItemTypes.splice(index, 1);
                        }
                        setInputs(tempInputs);
                      }}
                    />
                    <RadioButtonLabel htmlFor={type.id}>
                      {type.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                  {(index + 1) % 4 === 0 ? <br /> : null}
                </React.Fragment>
              ))}
            </CheckboxContainer>
            <InputTitle>창고 시설 해당사항 선택</InputTitle>
            <CheckboxContainer>
              {facilityChecks.map((check, index) => (
                <React.Fragment key={index + `CHECK`}>
                  <CheckBoxLine>
                    <CheckBox
                      id={check.id}
                      type="checkbox"
                      value={check.value}
                      name="facilityChecks"
                      onChange={(event) => {
                        let tempInputs = inputs;
                        tempInputs[event.target.value] = true;
                        setInputs(tempInputs);
                      }}
                    />
                    <RadioButtonLabel htmlFor={check.id}>
                      {check.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                </React.Fragment>
              ))}
            </CheckboxContainer>
            <InputTitle>
              창고 유형 선택(다중 선택 가능)
              <span style={{ color: 'red' }}>*</span>
            </InputTitle>
            <CheckboxContainer>
              {warehouseConditions.map((condition, index) => (
                <React.Fragment key={index + `COND`}>
                  <CheckBoxLine>
                    <CheckBox
                      id={condition.id}
                      type="checkbox"
                      value={condition.value}
                      name="warehouseCondition"
                      onChange={(event) => {
                        let tempInputs = inputs;
                        if (event.target.checked) {
                          tempInputs.warehouseCondition.push(
                            event.target.value,
                          );
                        } else {
                          let index = tempInputs.warehouseCondition.indexOf(
                            event.target.value,
                          );
                          tempInputs.warehouseCondition.splice(index, 1);
                        }
                        setInputs(tempInputs);
                      }}
                    />
                    <RadioButtonLabel htmlFor={condition.id}>
                      {condition.children}
                    </RadioButtonLabel>
                  </CheckBoxLine>
                </React.Fragment>
              ))}
            </CheckboxContainer>
            <ItemContainer>
              <InputTitle>
                제휴 택배사<span style={{ color: 'red' }}>*</span>
              </InputTitle>
              {inputs.deliveryTypes.map((delivery, idx) => {
                return (
                  <ButtonAndInputContainer key={`DELIVERYTYPES${idx}`}>
                    <Input
                      type="text"
                      value={delivery}
                      onChange={(event) => {
                        let temp = inputs.deliveryTypes;
                        temp[idx] = event.currentTarget.value;
                        setInputs({ ...inputs, deliveryTypes: temp });
                      }}
                      width="256px"
                    />
                    &nbsp;
                    {idx === 0 ? (
                      <AddButton onClick={() => addDeliveryTypes()}>
                        추가
                      </AddButton>
                    ) : null}
                    {idx !== 0 ? (
                      <RemoveButton onClick={() => removeDeliveryTypes(idx)}>
                        삭제
                      </RemoveButton>
                    ) : null}
                  </ButtonAndInputContainer>
                );
              })}
            </ItemContainer>
            <ItemContainer>
              <InputTitle>창고 시설 안내사항</InputTitle>
              {inputs.warehouseFacilityUsages.map((usage, idx) => {
                return (
                  <ButtonAndInputContainer key={`WH_FACILITY_USAGE${idx}`}>
                    <Input
                      type="text"
                      value={usage}
                      onChange={(event) => {
                        let temp = inputs.warehouseFacilityUsages;
                        temp[idx] = event.currentTarget.value;
                        setInputs({ ...inputs, warehouseFacilityUsages: temp });
                      }}
                      width="316px"
                    />
                    &nbsp;
                    {idx === 0 ? (
                      <AddButton onClick={() => addWarehouseFacilityUsages()}>
                        추가
                      </AddButton>
                    ) : null}
                    {idx !== 0 ? (
                      <RemoveButton
                        onClick={() => removeWarehouseFacilityUsages(idx)}
                      >
                        삭제
                      </RemoveButton>
                    ) : null}
                  </ButtonAndInputContainer>
                );
              })}
            </ItemContainer>
            <ItemContainer>
              <InputTitle>창고 이용 주의사항</InputTitle>
              {inputs.warehouseUsageCautions.map((caution, idx) => {
                return (
                  <ButtonAndInputContainer key={`WH_USAGE_CAUTION${idx}`}>
                    <Input
                      type="text"
                      value={caution}
                      onChange={(event) => {
                        let temp = inputs.warehouseUsageCautions;
                        temp[idx] = event.currentTarget.value;
                        setInputs({ ...inputs, warehouseUsageCautions: temp });
                      }}
                      width="316px"
                    />
                    &nbsp;
                    {idx === 0 ? (
                      <AddButton onClick={() => addWarehouseUsageCautions()}>
                        추가
                      </AddButton>
                    ) : null}
                    {idx !== 0 ? (
                      <RemoveButton
                        onClick={() => removeWarehouseUsageCautions(idx)}
                      >
                        삭제
                      </RemoveButton>
                    ) : null}
                  </ButtonAndInputContainer>
                );
              })}
            </ItemContainer>
            <SubmitButton
              onClick={async () => {
                if (uploading === true) return;
                if ((await register()) === 'SUCCESS') {
                  registerEvent.success();
                  window.location.href = '/mypage/houselist';
                } else {
                  registerEvent.failed();
                }
              }}
            >
              창고 등록 요청하기
            </SubmitButton>
          </TextContainer>
        </RegisterContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
