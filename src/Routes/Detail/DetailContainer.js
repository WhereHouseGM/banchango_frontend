import React from 'react';
import DetailPresenter from './DetailPresenter';
import 'react-toastify/dist/ReactToastify.css';
import { warehouseApi } from '../../api';

class DetailContainer extends React.Component {
  state = {
    houseDetail: null,
    houseInfosArr: null,
    error: null,
    loading: true,
  };
  componentDidMount = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const result = await warehouseApi.houseDetail(id);
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      const houseDetail = result.data;
      const houseInfos = {
        airConditioningType: houseDetail.airConditioningType,
        workerExist: houseDetail.workerExist,
        category: houseDetail.agencyDetails.mainItemType, 
        houseType: houseDetail.agencyDetails.warehouseType, 
        cctvExist: houseDetail.cctvExist, 
        insuranceName: houseDetail.insuranceName,
        canPark: houseDetail.canPark,
        securityCompanyExist: houseDetail.securityCompanyExist,
      };
      const houseInfosArr = [];

      if (houseInfos.airConditioningType === 'HEATING') {
        houseInfosArr.push('♨난방');
      } else if (houseInfos.airConditioningType === 'COOLING') {
        houseInfosArr.push('❄냉방');
      } else if (houseInfos.airConditioningType === 'BOTH') {
        houseInfosArr.push('🌡냉난방');
      }

      if (houseInfos.workerExist === 1) {
        houseInfosArr.push('💁포장 인력');
      }

      if (houseInfos.category === 'CLOTH') {
        houseInfosArr.push('👕의류');
      } else if (houseInfos.category === 'COSMETIC') {
        houseInfosArr.push('💄화장품');
      } else if (houseInfos.category === 'FURNITURE') {
        houseInfosArr.push('🛌가구');
      } else if (houseInfos.category === 'GENERAL_MERCHANDISE') {
        houseInfosArr.push('👜잡화');
      } else if (houseInfos.category === 'TEMPERATURE_SENSITIVE') {
        houseInfosArr.push('🍔식품');
      } else if (houseInfos.category === 'ACCESSORY') {
        houseInfosArr.push('악세서리💍');
      }

      if (houseInfos.houseType === 'THREEPL') {
        houseInfosArr.push('🚚도매 전문');
      } else if (houseInfos.houseType === 'FULFILLMENT') {
        houseInfosArr.push('🛒소매 전문');
      }

      if (houseInfos.cctvExist === 1) {
        houseInfosArr.push('📹CCTV');
      }

      if (houseInfos.hasOwnProperty('insuranceName')) {
        houseInfosArr.push('📝'.concat(houseInfos.insuranceName));
      }

      if (houseInfos.canPark === 1) {
        houseInfosArr.push('🚗주차');
      }
      if (houseInfos.securityCompanyExist === 1) {
        houseInfosArr.push('👮보안업체');
      }

      this.setState({
        houseDetail: houseDetail,
        houseInfosArr: houseInfosArr,
        loading: false,
      });
    } catch (Error) {
      this.setState({
        error: '해당 창고의 정보가 존재하지 않습니다.',
        loading: false,
      });
    }
  };
  render() {
    const { houseDetail, houseInfosArr, error, loading } = this.state;
    return (
      <>
        <DetailPresenter
          houseDetail={houseDetail}
          houseInfosArr={houseInfosArr}
          error={error}
          loading={loading}
        />
      </>
    );
  }
}
export default DetailContainer;
