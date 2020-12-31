import React from 'react';
import RegisterPresenter from './RegisterPresenter';
import { warehouseApi } from '../../api';

const InputType = {
  NAME: 'name',
  SPACE: 'space',
  ADDRESS: 'address',
  ADDRESS_DETAIL: 'addressDetail',
  DESCRIPTION: 'description',
  AVAIL_WEEK_DAYS: 'availableWeekdays',
  OPEN_AT: 'openAt',
  CLOSE_AT: 'closeAt',
  AVAIL_TIME_DETAIL: 'availableTimeDetail',
  INSURANCE: 'insurance',
  CCTV_EXIST: 'cctvExist',
  SECURITY_COMP_NAME: 'securityCompanyName',
  DOOR_LOCK_EXIST: 'doorLockExist',
  AIR_CONDITIONING_TYPE: 'airConditioningType',
  WORKER_EXIST: 'workerExist',
  CAN_PARK: 'canPark',
  MAIN_ITEM_TYPE: 'mainItemTypes',
  WAREHOUSE_TYPE: 'warehouseType',
  MIN_RELEASE_PER_MONTH: 'minReleasePerMonth',
  DELIVERY_TYPES: 'deliveryTypes',
  WAREHOUSE_FACILITY_USAGES: 'warehouseFacilityUsages',
  WAREHOUSE_USAGE_CAUTIONS: 'warehouseUsageCautions',
  WAREHOUSE_CONDITION: 'warehouseCondition',
};

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      space: 0,
      address: null,
      addressDetail: null,
      description: '',
      openAt: null,
      closeAt: null,
      availableTimeDetail: null,
      insurance: null,
      securityCompanyName: null,
      minReleasePerMonth: 0,
      deliveryTypes: [],
      warehouseFacilityUsages: [],
      warehouseUsageCautions: [],
    };
  }

  handleSimpleTextInput = (event) => {
    event.preventDefault();
    const {
      target: { name },
    } = event;
    const {
      target: { value },
    } = event;

    switch (name) {
      case InputType.NAME:
        this.setState({ name: value });
        return;
      case InputType.SPACE:
        this.setState({ space: parseInt(value) });
        return;
      case InputType.ADDRESS:
        this.setState({ address: value });
        return;
      case InputType.ADDRESS_DETAIL:
        this.setState({ addressDetail: value });
        return;
      case InputType.OPEN_AT:
        this.setState({ openAt: value });
        return;
      case InputType.CLOSE_AT:
        this.setState({ closeAt: value });
        return;
      case InputType.AVAIL_TIME_DETAIL:
        this.setState({ availableTimeDetail: value });
        return;
      case InputType.INSURANCE:
        this.setState({ insurance: value });
        return;
      case InputType.SECURITY_COMP_NAME:
        this.setState({ securityCompanyName: value });
        return;
      case InputType.MIN_RELEASE_PER_MONTH:
        this.setState({ minReleasePerMonth: parseInt(value) });
        return;
      case InputType.DESCRIPTION:
        this.setState({ description: value });
        return;
      default:
        return;
    }
  };

  getSelectedWarehouseCondition = () => {
    let checkboxList = document.getElementsByName(
      InputType.WAREHOUSE_CONDITION,
    );
    let _warehouseCondition = [];
    for (let i = 0; i < checkboxList.length; i++) {
      if (checkboxList[i].checked) {
        _warehouseCondition.push(checkboxList[i].value);
      }
    }
    return _warehouseCondition;
  };

  getSelectedMainItemTypes = () => {
    let checkboxList = document.getElementsByName(InputType.MAIN_ITEM_TYPE);
    let _mainItemTypes = [];
    for (let i = 0; i < checkboxList.length; i++) {
      if (checkboxList[i].checked) {
        _mainItemTypes.push(checkboxList[i].value);
      }
    }
    return _mainItemTypes;
  };

  getAvailableWeekdays = () => {
    let radioList = document.getElementsByName(InputType.AVAIL_WEEK_DAYS);
    for (let i = 0; i < radioList.length; i++) {
      if (radioList[i].checked) {
        return parseInt(radioList[i].value);
      }
    }
  };

  getAirConditioningType = () => {
    let radioList = document.getElementsByName(InputType.AIR_CONDITIONING_TYPE);
    for (let i = 0; i < radioList.length; i++) {
      if (radioList[i].checked) {
        return radioList[i].value;
      }
    }
  };

  getDeliveryTypes = () => {
    let list = document.getElementsByName(InputType.DELIVERY_TYPES);
    let _deliveryTypes = [];
    for (let i = 0; i < list.length; i++) {
      _deliveryTypes.push(list[i].value);
    }
    return _deliveryTypes;
  };

  getWarehouseFacilityUsages = () => {
    let list = document.getElementsByName(InputType.WAREHOUSE_FACILITY_USAGES);
    let _warehouseFacilityUsages = [];
    for (let i = 0; i < list.length; i++) {
      _warehouseFacilityUsages.push(list[i].value);
    }
    return _warehouseFacilityUsages;
  };

  getWarehouseUsageCautions = () => {
    let list = document.getElementsByName(InputType.WAREHOUSE_USAGE_CAUTIONS);
    let _warehouseUsageCautions = [];
    for (let i = 0; i < list.length; i++) {
      _warehouseUsageCautions.push(list[i].value);
    }
    return _warehouseUsageCautions;
  };

  getWarehouseType = () => {
    let radioList = document.getElementsByName(InputType.WAREHOUSE_TYPE);
    for (let i = 0; i < radioList.length; i++) {
      if (radioList[i].checked) {
        return radioList[i].value;
      }
    }
  };

  handleRegisterSubmit = async (event) => {
    event.preventDefault();
    let _mainItemTypes = this.getSelectedMainItemTypes();
    if (_mainItemTypes.length > 3) {
      alert('대표 품목은 최대 3개까지 선택 가능합니다.');
      return;
    } else if (_mainItemTypes.length === 0) {
      alert('대표 품목을 1개 이상 선택해주세요.');
      return;
    }

    const _warehouseCondition = this.getSelectedWarehouseCondition();
    const _warehouseType = this.getWarehouseType();
    const _airConditioningType = this.getAirConditioningType();
    const _availableWeekdays = this.getAvailableWeekdays();

    if (_warehouseCondition.length === 0) {
      alert('창고 유형을 1개 이상 선택해주세요.');
    }
    const {
      description,
      name,
      space,
      address,
      addressDetail,
      openAt,
      closeAt,
      availableTimeDetail,
      minReleasePerMonth,
      insurance,
      securityCompanyName,
    } = this.state;

    if (description.length >= 399) {
      alert('창고 소개는 최대 400자까지 가능합니다.');
      document.getElementById('description').focus();
      return;
    }
    if (description.trim() === '' || description === null) {
      alert('창고 소개글을 입력해주세요.');
      document.getElementById('description').focus();
      return;
    }
    if (name.trim() === '' || name === null) {
      alert('창고명을 입력해주세요');
      document.getElementById('name').focus();
      return;
    }
    if (space === null) {
      alert('창고 평수를 입력해주세요.');
      document.getElementById('space').focus();
      return;
    }
    if (address.trim() === '' || address === null) {
      alert('주소를 입력해주세요.');
      document.getElementById('address').focus();
      return;
    }
    if (addressDetail.trim() === '' || addressDetail === null) {
      alert('상세 주소를 입력해주세요.');
      document.getElementById('addressDetail').focus();
      return;
    }
    if (openAt.trim() === '' || openAt === null) {
      alert('영업 시작 시간을 입력해주세요.');
      document.getElementById('openAt').focus();
      return;
    }
    if (closeAt.trim() === '' || closeAt === null) {
      alert('영업 종료 시간을 입력해주세요.');
      document.getElementById('closeAt').focus();
      return;
    }
    if (availableTimeDetail.trim() === '' || availableTimeDetail === null) {
      alert('영업 시간 유의사항을 입력해주세요.');
      document.getElementById('availableTimeDetail').focus();
      return;
    }
    if (_availableWeekdays === null) {
      alert('영업 요일을 선택해주세요.');
      return;
    }
    if (insurance.trim() === '' || insurance === null) {
      alert('보험사를 입력해주세요.');
      document.getElementById('insurance').focus();
      return;
    }
    if (minReleasePerMonth === null) {
      alert('월 최소 출고량을 입력해주세요.\n 없을 경우 1을 입력해주세요.');
      document.getElementById('minReleasePerMonth').focus();
      return;
    }
    if (securityCompanyName.trim() === '' || securityCompanyName === null) {
      alert('경비 업체를 입력해주세요.');
      document.getElementById('securityCompanyName').focus();
      return;
    }
    if (_warehouseType === null) {
      alert('업종을 선택해주세요.');
      return;
    }
    if (_airConditioningType === null) {
      alert('냉난방 지원 방식을 선택해주세요.');
      return;
    }

    const _deliveryTypes = this.getDeliveryTypes();

    if (_deliveryTypes.length === 0) {
      alert('제휴 택배사를 1개 이상 입력해주세요.');
      document.getElementById('deliveryTypes0').focus();
      return;
    }

    const _warehouseFacilityUsages = this.getWarehouseFacilityUsages();
    const _warehouseUsageCautions = this.getWarehouseUsageCautions();

    const requestBody = {
      name: name,
      space: space,
      address: address,
      addressDetail: addressDetail,
      description: description,
      openAt: openAt,
      closeAt: closeAt,
      availableTimeDetail: availableTimeDetail,
      availableWeekdays: _availableWeekdays,
      minReleasePerMonth: minReleasePerMonth,
      insurance: insurance,
      securityCompanyName: securityCompanyName,
      warehouseType: _warehouseType,
      airConditioningType: _airConditioningType,
      mainItemTypes: _mainItemTypes,
      cctvExist: document.getElementById(InputType.CCTV_EXIST).checked
        ? true
        : false,
      doorLockExist: document.getElementById(InputType.DOOR_LOCK_EXIST).checked
        ? true
        : false,
      workerExist: document.getElementById(InputType.WORKER_EXIST).checked
        ? true
        : false,
      canPark: document.getElementById(InputType.CAN_PARK).checked
        ? true
        : false,
      warehouseCondition: _warehouseCondition,
      deliveryTypes: _deliveryTypes,
      warehouseUsageCautions: _warehouseUsageCautions,
      warehouseFacilityUsages: _warehouseFacilityUsages,
      latitude: 88.888,
      longitude: 99.999,
    };

    try {
      const result = await warehouseApi.register(
        requestBody,
        localStorage.getItem('AccessToken'),
      );
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      alert('창고 등록이 정상적으로 요청되었습니다.');
      window.location.href = '/';
    } catch {
      alert('예상치 못한 에러가 발생했습니다. 관리자에게 문의해주세요.');
      window.location.href = '/';
    }
  };

  render() {
    return (
      <RegisterPresenter
        handleSimpleTextInput={this.handleSimpleTextInput}
        handleRegisterSubmit={this.handleRegisterSubmit}
      />
    );
  }
}

export default RegisterContainer;
