import React from 'react';
import AdminPresenter from './AdminPresenter';
import sha256 from 'crypto';
import { userApi } from '../../api';
//import { warehouseApi } from '../../api';

const WarehouseOwnerInputTypes = {
  USER_EMAIL: 'userEmail',
  USER_PASS: 'userPass',
};

const WarehouseInfoInputTypes = {
  NAME: 'name',
  AREA: 'area',
  ADDRESS: 'address',
  ADDRESS_DETAIL: 'addressDetail',
  DESCRIPTION: 'description',
  OPEN_AT: 'openAt',
  CLOSE_AT: 'closeAt',
  MIN_RELEASE_PER_MONTH: 'minReleasePerMonth',
  AVAILABLE_TIME_DETAIL: 'availableTimeDetail',
  SEC_COMP_NAME: 'securityCompanyName',
  INSURANCE_NAME: 'insuranceName',
  LATITUDE: 'latitude',
  LONGITUDE: 'longitude',
  DELIVERY_TYPES: 'deliveryTypes',
  WH_FACILITY_USAGES: 'warehouseFacilityUsages',
  WH_USAGE_CAUTIONS: 'warehouseUsageCautions',
};

class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      name: null,
      area: null,
      address: null,
      addressDetail: null,
      description: null,
      openAt: null,
      closeAt: null,
      minReleasePerMonth: null,
      availableTimeDetail: null,
      securityCompanyName: null,
      insuranceName: null,
      latitude: null,
      longitude: null,
      deliveryTypes: null,
      warehouseFacilityUsages: null,
      warehouseUsageCautions: null,
    };
  }

  handleLoginInput = (event) => {
    event.preventDefault();
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case WarehouseOwnerInputTypes.USER_EMAIL:
        this.setState({ userEmail: value });
        return;
      case WarehouseOwnerInputTypes.USER_PASS:
        this.setState({ userPassword: value });
        return;
      default:
        return;
    }
  };

  handleInfoInput = (event) => {
    event.preventDefault();
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case WarehouseInfoInputTypes.NAME:
        this.setState({ name: value });
        return;
      case WarehouseInfoInputTypes.AREA:
        this.setState({ area: value });
        return;
      case WarehouseInfoInputTypes.ADDRESS:
        this.setState({ address: value });
        return;
      case WarehouseInfoInputTypes.ADDRESS_DETAIL:
        this.setState({ addressDetail: value });
        return;
      case WarehouseInfoInputTypes.OPEN_AT:
        this.setState({ openAt: value });
        return;
      case WarehouseInfoInputTypes.CLOSE_AT:
        this.setState({ closeAt: value });
        return;
      case WarehouseInfoInputTypes.AVAILABLE_TIME_DETAIL:
        this.setState({ availableTimeDetail: value });
        return;
      case WarehouseInfoInputTypes.MIN_RELEASE_PER_MONTH:
        this.setState({ minreleasePerMonth: value });
        return;
      case WarehouseInfoInputTypes.DESCRIPTION:
        this.setState({ description: value });
        return;
      case WarehouseInfoInputTypes.SEC_COMP_NAME:
        this.setState({ securityCompanyName: value });
        return;
      case WarehouseInfoInputTypes.INSURANCE_NAME:
        this.setState({ insuranceName: value });
        return;
      case WarehouseInfoInputTypes.LATITUDE:
        this.setState({ latitude: value });
        return;
      case WarehouseInfoInputTypes.LONGITUDE:
        this.setState({ longitude: value });
        return;
      case WarehouseInfoInputTypes.WH_FACILITY_USAGES:
        this.setState({ warehouseFacilityUsages: value });
        return;
      case WarehouseInfoInputTypes.WH_USAGE_CAUTIONS:
        this.setState({ warehouseUsageCautions: value });
        return;
      default:
        return;
    }
  };

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = this.state;
    const hashCode = sha256
      .createHash('sha256')
      .update(userPassword)
      .digest('hex');
    const requestBody = {
      email: userEmail,
      password: hashCode,
    };
    try {
      const result = await userApi.signIn(requestBody);
      const {
        data: { accessToken },
      } = result;
      localStorage.setItem('TokenForRegister', accessToken);
      alert('정상적으로 로그인 되었습니다.');
    } catch {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      document.getElementById('userPass').value = '';
      document.getElementById('userEmail').focus();
    }
  };

  refreshUser = () => {
    localStorage.removeItem('TokenForRegister');
    document.getElementById('userEmail').value = '';
    document.getElementById('userPass').value = '';
    alert('창고주 로그아웃 되었습니다.');
  };

  handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      area,
      address,
      closeAt,
      securityCompanyName,
      availableTimeDetail,
      openAt,
      description,
      addressDetail,
      latitude,
      longitude,
      insuranceName,
      minReleasePerMonth,
      deliveryTypes,
    } = this.state;
    const locationObject = {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };
    const insuranceObject = {
      name: insuranceName,
    };
    const agencyDetailObject = {
      warehouseType: 'TODO',
      minReleasePerMonth: minReleasePerMonth,
      mainItemType: 'TODO',
      deliveryTypes: deliveryTypes,
    };
    const registerRequestBody = {
      canUse: 1,
      name: name,
      serviceType: 'AGENCY',
      landArea: parseInt(area),
      totalArea: parseInt(area),
      address: address,
      addressDetail: addressDetail,
      description: description,
      availableWeekdays: 111110,
      openAt: openAt,
      closeAt: closeAt,
      availableTimeDetail: availableTimeDetail,
      cctvExist: 'TODO',
      securityCompanyExist: 'TODO',
      securityCompanyName: securityCompanyName,
      doorLockExist: 'TODO',
      airConditioningType: 'TODO',
      workerExist: 'TODO',
      canPickup: 'TODO',
      canPark: 'TODO',
      parkingScale: 10,
      warehouseCondition: 'TODO',
      warehouseFacilityUsages: 'TODO',
      warehouseUsageCautions: 'TODO',
      insurance: insuranceObject,
      location: locationObject,
      agencyDetail: agencyDetailObject,
    };
    console.log(registerRequestBody);
  };

  render() {
    return (
      <AdminPresenter
        handleLoginInput={this.handleLoginInput}
        handleLoginSubmit={this.handleLoginSubmit}
        refreshUser={this.refreshUser}
        handleInfoInput={this.handleInfoInput}
        handleRegisterSubmit={this.handleRegisterSubmit}
      />
    );
  }
}

export default AdminContainer;
