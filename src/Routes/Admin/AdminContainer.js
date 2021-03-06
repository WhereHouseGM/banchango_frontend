import React from 'react';
import AdminPresenter from './AdminPresenter';
import sha256 from 'crypto';
import { userApi, warehouseApi, imageApi } from '../../api';

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
      mainImage: null,
      extraImages: [],
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
        this.setState({ minReleasePerMonth: value });
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
      case WarehouseInfoInputTypes.DELIVERY_TYPES:
        this.setState({ deliveryTypes: value });
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
    userApi
      .signIn(requestBody)
      .then(({ data: { accessToken } }) => {
        localStorage.setItem('TokenForRegister', accessToken);
        alert('정상적으로 로그인 되었습니다.');
      })
      .catch(({ response: { status } }) => {
        if (status === 404) {
          alert('이메일 또는 비밀번호가 일치하지 않습니다.');
          document.getElementById('usePass').value = '';
          document.getElementById('userEmail').focus();
        } else {
          alert(`[${status}]알 수 없는 오류가 발생했습니다.`);
        }
      });
  };

  refreshUser = () => {
    localStorage.removeItem('TokenForRegister');
    document.getElementById('userEmail').value = '';
    document.getElementById('userPass').value = '';
    alert('창고주 로그아웃 되었습니다.');
  };

  getSelectedWarehouseType = () => {
    let radioList = document.getElementsByName('warehouseType');
    for (let i = 0; i < radioList.length; i++) {
      if (radioList[i].checked) {
        return radioList[i].value;
      }
    }
  };

  getSelectedMainItemType = () => {
    let radioList = document.getElementsByName('mainItemType');
    for (let i = 0; i < radioList.length; i++) {
      if (radioList[i].checked) {
        return radioList[i].value;
      }
    }
  };

  getSelectedAirConditioningType = () => {
    let radioList = document.getElementsByName('airConditioningType');
    for (let i = 0; i < radioList.length; i++) {
      if (radioList[i].checked) {
        return radioList[i].value;
      }
    }
  };

  getSelectedWarehouseConditions = () => {
    let checkboxList = document.getElementsByName('warehouseConditions');
    let list = [];
    for (let i = 0; i < checkboxList.length; i++) {
      if (checkboxList[i].checked) {
        list.push(checkboxList[i].value);
      }
    }
    return list;
  };

  getDeliveryTypes = (deliveryTypes) => {
    let typesList = deliveryTypes.split('+++');
    let list = [];
    for (let i = 0; i < typesList.length; i++) {
      list.push(typesList[i]);
    }
    return list;
  };

  getWarehouseFacilityUsages = (warehouseFacilityUsages) => {
    let list = [];
    if (warehouseFacilityUsages !== null) {
      let usagesList = warehouseFacilityUsages.split('+++');
      for (let i = 0; i < usagesList.length; i++) {
        list.push(usagesList[i]);
      }
    }
    return list;
  };

  getWarehouseUsageCautions = (warehouseUsageCautions) => {
    let list = [];

    if (warehouseUsageCautions !== null) {
      let cautionsList = warehouseUsageCautions.split('+++');
      for (let i = 0; i < cautionsList.length; i++) {
        list.push(cautionsList[i]);
      }
    }
    return list;
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
      warehouseFacilityUsages,
      warehouseUsageCautions,
    } = this.state;
    const locationObject = {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };
    const insuranceObject = {
      name: insuranceName,
    };
    const agencyDetailObject = {
      warehouseType: this.getSelectedWarehouseType(),
      minReleasePerMonth: parseInt(minReleasePerMonth),
      mainItemType: this.getSelectedMainItemType(),
      deliveryTypes: this.getDeliveryTypes(deliveryTypes),
    };
    const registerRequestBody = {
      accessToken: localStorage.getItem('TokenForRegister'),
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
      cctvExist: document.getElementById('cctvExist').checked ? 1 : 0,
      securityCompanyExist: document.getElementById('securityCompanyExist')
        ? 1
        : 0,
      securityCompanyName: securityCompanyName,
      doorLockExist: document.getElementById('doorLockExist').checked ? 1 : 0,
      airConditioningType: this.getSelectedAirConditioningType(),
      workerExist: document.getElementById('workerExist').checked ? 1 : 0,
      canPickup: document.getElementById('canPickup').checked ? 1 : 0,
      canPark: document.getElementById('canPark').checked ? 1 : 0,
      parkingScale: 10,
      warehouseCondition: this.getSelectedWarehouseConditions(),
      warehouseFacilityUsages: this.getWarehouseFacilityUsages(
        warehouseFacilityUsages,
      ),
      warehouseUsageCautions: this.getWarehouseUsageCautions(
        warehouseUsageCautions,
      ),
      insurance: insuranceObject,
      location: locationObject,
      agencyDetails: agencyDetailObject,
    };
    try {
      const result = await warehouseApi.register(
        registerRequestBody,
        localStorage.getItem('AccessToken'),
      );
      const {
        data: { warehouseId },
      } = result;
      localStorage.setItem('warehouseId', warehouseId);
      alert('창고 정보가 정상적으로 등록되었습니다.');
      localStorage.removeItem('TokenForRegister');
    } catch (error) {
      if (error.toString().includes('400')) {
        alert('뭔가 빼먹었거나 형식대로 안썼군. 죽빵이야~~');
      } else if (error.toString().includes('401')) {
        alert('혹시 창고주 로그인 먼저 안함????');
      } else {
        alert('먼가 잘못됨.. 나한테 와,,');
      }
    }
  };

  handleMainImageSelect = (event) => {
    event.preventDefault();
    const {
      target: { files },
    } = event;
    let mainImageFile = files[0];
    this.setState({ mainImage: mainImageFile });
    const { size } = mainImageFile;
    document.getElementById('fileSize').innerHTML = `사진 크기: ${size} 바이트`;
  };

  handleExtraImageSelect = (event) => {
    event.preventDefault();
    const {
      target: { files },
    } = event;
    let imageFile = files[0];
    const { size } = imageFile;
    const { extraImages } = this.state;
    if (extraImages.length >= 5) {
      alert(
        '등록할 수 있는 최대 추가사진은 5개여.. 화면 새로고침하고 다시 넣으세요',
      );
      return;
    } else {
      extraImages.push(imageFile);
      document.getElementById(
        'extraFileSize',
      ).innerHTML = `사진 크기: ${size} 바이트`;
      this.setState({ extraImages });
    }
  };

  handleExtraImageSubmit = async (event) => {
    event.preventDefault();
    const { extraImages } = this.state;
    try {
      for (let i = 0; i < extraImages.length; i++) {
        let formData = new FormData();
        formData.append('file', extraImages[i]);

        await imageApi.uploadExtraImage(
          parseInt(localStorage.getItem('warehouseId')),
          formData,
          localStorage.getItem('TokenForRegister'),
        );
      }
      alert('추가 사진이 모두 등록되었습니다.');
    } catch (error) {
      if (error.toString().includes('400')) {
        alert('뭔가 잘못됨. 창고주 로그인을 안했다던가 등등..');
      } else if (error.toString().includes('401')) {
        alert('창고주 로그인 다시 해주세용');
      } else if (error.toString().includes('403')) {
        alert('창고주 로그인한 계정이 잘못됨.');
      } else if (error.toString().includes('406')) {
        alert(
          '이미 추가 사진 이미 5개 등록되어 있음... 나한테 지워달라고 하세요,,',
        );
      }
    }
  };

  handleMainImageSubmit = async (event) => {
    event.preventDefault();
    const { mainImage } = this.state;
    const formData = new FormData();
    formData.append('file', mainImage);
    try {
      await imageApi.uploadMainImage(
        parseInt(localStorage.getItem('warehouseId')),
        formData,
        localStorage.getItem('TokenForRegister'),
      );
      alert('메인 이미지가 정상적으로 등록되었습니다.');
    } catch (error) {
      if (error.toString().includes('400')) {
        alert('뭔가 잘못됨. 창고주 로그인을 안했다던가 등등..');
      } else if (error.toString().includes('401')) {
        alert('창고주 로그인 다시 해주세용');
      } else if (error.toString().includes('403')) {
        alert('창고주 로그인한 계정이 잘못됨.');
      } else if (error.toString().includes('406')) {
        alert('이미 메인 사진 등록되어 있음... 나한테 지워달라고 하세요,,');
      }
    }
  };

  render() {
    return (
      <AdminPresenter
        handleLoginInput={this.handleLoginInput}
        handleLoginSubmit={this.handleLoginSubmit}
        refreshUser={this.refreshUser}
        handleInfoInput={this.handleInfoInput}
        handleRegisterSubmit={this.handleRegisterSubmit}
        handleMainImageSelect={this.handleMainImageSelect}
        handleMainImageSubmit={this.handleMainImageSubmit}
        handleExtraImageSelect={this.handleExtraImageSelect}
        handleExtraImageSubmit={this.handleExtraImageSubmit}
      />
    );
  }
}

export default AdminContainer;
