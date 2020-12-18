import React from 'react';
import DetailPresenter from './DetailPresenter';
import 'react-toastify/dist/ReactToastify.css';
import { warehouseApi } from '../../api';
import {
  airConditioningTypeDict,
  categoryInfosDict,
  workerExistDict,
  houseTypeDict,
  cctvExistDict,
  canParkDict,
  securityCompanyExistDict,
} from '../../static/detail';

class DetailContainer extends React.Component {
  state = {
    houseDetail: null,
    houseInfosArr: null,
    error: null,
    loading: true,
  };

  returnHouseInfosArr = (houseDetail) => {
    const infos = {
      airConditioningType: houseDetail.airConditioningType,
      workerExist: houseDetail.workerExist,
      category: houseDetail.agencyDetails.mainItemType,
      houseType: houseDetail.agencyDetails.warehouseType,
      cctvExist: houseDetail.cctvExist,
      insuranceName: houseDetail.insuranceName,
      canPark: houseDetail.canPark,
      securityCompanyExist: houseDetail.securityCompanyExist,
    };

    const infosArr = [];
    const infoStrs = {
      airConditioningTypeStr: airConditioningTypeDict(
        infos.airConditioningType,
      ),
      workerExistStr: workerExistDict(infos.workerExist),
      categoryStr: categoryInfosDict(infos.category),
      houseTypeStr: houseTypeDict(infos.category),
      cctvExistStr: cctvExistDict(infos.cctvExist),
      houseInfosStr: houseDetail.hasOwnProperty('insuranceName')
        ? '📝'.concat(houseDetail.insuranceName)
        : '',
      canParkStr: canParkDict(infos.canPark),
      securityCompanyExistStr: securityCompanyExistDict(
        infos.securityCompanyExist,
      ),
    };
    for (let key in infoStrs) {
      if (infoStrs[key] !== '') {
        infosArr.push(infoStrs[key]);
      }
    }
    return infosArr;
  };

  componentDidMount = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const result = await warehouseApi.houseDetail(id);
      const houseDetail = result.data;
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      this.setState({
        houseDetail: houseDetail,
        houseInfosArr: this.returnHouseInfosArr(houseDetail),
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
