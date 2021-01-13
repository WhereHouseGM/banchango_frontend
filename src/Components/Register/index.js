import React, { useState, useRef } from 'react';
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
  ArrayInput,
  InputType,
} from './Register';

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

const Register = () => {
  const ref = useRef();
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
    insurances: [],
    cctvExist: false,
    securityCompanies: [],
    doorLockExist: false,
    airConditioningType: null,
    workerExist: false,
    canPark: false,
    mainItemTypes: [],
    warehouseType: null,
    minReleasePerMonth: null,
    deliveryTypes: [],
    warehouseFacilityUsages: [],
    warehouseUsageCautions: [],
    warehouseCondition: [],
  });

  const InputRefs = {
    insurances: useRef(InputType.INSURANCES),
    securityCompanies: useRef(InputType.SECURITY_COMPANIES),
    deliveryTypes: useRef(InputType.DELIVERY_TYPES),
    warehouseFacilityUsages: useRef(InputType.WAREHOUSE_FACILITY_USAGES),
    warehouseUsageCautions: useRef(InputType.WAREHOUSE_USAGE_CAUTIONS),
  };

  const [deliveryTypes, setDeliveryTypes] = useState([
    <ButtonAndInputContainer key={0}>
      <Input
        id="deliveryTypes0"
        className="deliveryTypes"
        name="deliveryTypes"
        type="text"
        width="256px"
        ref={InputRefs.deliveryTypes}
      />
      &nbsp;
      <AddButton onClick={() => addDeliveryTypes()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const [warehouseFacilityUsages, setWarehouseFaciltiyUsages] = useState([
    <ButtonAndInputContainer key={0}>
      <ArrayInput
        id="warehouseFacilityUsages0"
        className="warehouseFacilityUsages"
        name="warehouseFacilityUsages"
        type="text"
        width="316px"
        ref={InputRefs.warehouseFacilityUsages}
      />
      <AddButton onClick={() => addWarehouseFacilityUsages()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const [warehouseUsageCautions, setWarehouseUsageCautions] = useState([
    <ButtonAndInputContainer key={0}>
      <ArrayInput
        id="warehouseUsageCautions0"
        className="warehouseUsageCautions"
        name="warehouseUsageCautions"
        type="text"
        width="316px"
        ref={InputRefs.warehouseUsageCautions}
      />
      <AddButton onClick={() => addWarehouseUsageCautions()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const [insurances, setInsurances] = useState([
    <ButtonAndInputContainer>
      <Input type="text" width="256px" ref={InputRefs.insurances} />
      <AddButton onClick={() => addInsurances()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const [securityCompanies, setSecurityCompanies] = useState([
    <ButtonAndInputContainer>
      <Input type="text" width="256px" ref={InputRefs.securityCompanies} />
      <AddButton onClick={() => addSecurityCompanies()}>추가</AddButton>
    </ButtonAndInputContainer>,
  ]);

  const addInsurances = () => {
    const arrOfInsurances = insurances;
    let key = arrOfInsurances.length;
    arrOfInsurances.push(
      <ButtonAndInputContainer key={`INSURANCES${key}`}>
        <Input type="text" width="256px" ref={InputRefs.insurances} />
        {key === 1 ? <RemoveButton>삭제</RemoveButton> : null}
      </ButtonAndInputContainer>,
    );
    setInsurances([...arrOfInsurances]);
  };

  const addSecurityCompanies = () => {
    const arrOfSecurityCompanies = securityCompanies;
    let key = arrOfSecurityCompanies.length;
    arrOfSecurityCompanies.push(
      <ButtonAndInputContainer key={`SEC_COMP${key}`}>
        <Input type="text" width="256px" ref={InputRefs.securityCompanies} />
        {key === 1 ? <RemoveButton>삭제</RemoveButton> : null}
      </ButtonAndInputContainer>,
    );
    setSecurityCompanies([...arrOfSecurityCompanies]);
  };

  const addDeliveryTypes = () => {
    const arrOfDeliveryTypes = deliveryTypes;
    let key = arrOfDeliveryTypes.length;
    arrOfDeliveryTypes.push(
      <ButtonAndInputContainer key={key}>
        <Input
          id={`deliveryTypes${key}`}
          className="deliveryTypes"
          name="deliveryTypes"
          type="text"
          width="256px"
          ref={InputRefs.deliveryTypes}
        />
        {key === 1 ? (
          <RemoveButton onClick={removeDeliveryTypes}>삭제</RemoveButton>
        ) : null}
      </ButtonAndInputContainer>,
    );
    setDeliveryTypes([...arrOfDeliveryTypes]);
  };

  const addWarehouseFacilityUsages = () => {
    const arrOfWarehouseFacilityUsages = warehouseFacilityUsages;
    let key = arrOfWarehouseFacilityUsages.length;
    arrOfWarehouseFacilityUsages.push(
      <ButtonAndInputContainer key={key}>
        <ArrayInput
          id={`warehouseFacilityUsages${key}`}
          className="warehouseFacilityUsages"
          name="warehouseFacilityUsages"
          type="text"
          width="316px"
          ref={InputRefs.warehouseFacilityUsages}
        />
        {key === 1 ? (
          <RemoveButton onClick={removeWarehouseFacilityUsages}>
            삭제
          </RemoveButton>
        ) : null}
      </ButtonAndInputContainer>,
    );
    setWarehouseFaciltiyUsages([...arrOfWarehouseFacilityUsages]);
  };

  const addWarehouseUsageCautions = () => {
    const arrOfWarehouseUsageCautions = warehouseUsageCautions;
    let key = arrOfWarehouseUsageCautions.length;
    arrOfWarehouseUsageCautions.push(
      <ButtonAndInputContainer key={key}>
        <ArrayInput
          id={`warehouseUsageCautions${key}`}
          className="warehouseUsageCautions"
          name="warehouseUsageCautions"
          type="text"
          width="316px"
          ref={InputRefs.warehouseUsageCautions}
        />
        {key === 1 ? (
          <RemoveButton onClick={removeWarehouseUsageCautions}>
            삭제
          </RemoveButton>
        ) : null}
      </ButtonAndInputContainer>,
    );
    setWarehouseUsageCautions([...arrOfWarehouseUsageCautions]);
  };

  const removeDeliveryTypes = () => {
    let arrOfDeliveryTypes = deliveryTypes;
    arrOfDeliveryTypes.pop();
    setDeliveryTypes([...arrOfDeliveryTypes]);
  };

  const removeWarehouseFacilityUsages = () => {
    let arrOfWarehouseFacilityUsages = warehouseFacilityUsages;
    arrOfWarehouseFacilityUsages.pop();
    setWarehouseFaciltiyUsages([...arrOfWarehouseFacilityUsages]);
  };

  const removeWarehouseUsageCautions = () => {
    let arrOfWarehouseUsageCautions = warehouseUsageCautions;
    arrOfWarehouseUsageCautions.pop();
    setWarehouseUsageCautions([...arrOfWarehouseUsageCautions]);
  };

  const sout = () => console.log(inputs);

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
                  alert('창고 소개는 최대 400자 까지 입력 가능합니다.');
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
            <RadioButtonContainer>
              {availableWeekdays.map((day, index) => (
                <React.Fragment key={index + `AWD_TYPE`}>
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
                  보험사(1개)<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                {insurances}
              </ItemContainer>
              <ItemContainer>
                <InputTitle>
                  경비 업체(1개)<span style={{ color: 'red' }}>*</span>
                </InputTitle>
                {securityCompanies}
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
              {deliveryTypes}
            </ItemContainer>
            <ItemContainer>
              <InputTitle>창고 시설 이용 유의사항</InputTitle>
              {warehouseFacilityUsages}
            </ItemContainer>
            <ItemContainer>
              <InputTitle>창고 이용 시 주의사항</InputTitle>
              {warehouseUsageCautions}
            </ItemContainer>
            <SubmitButton onClick={() => sout()}>
              창고 등록 요청하기
            </SubmitButton>
          </TextContainer>
        </RegisterContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
