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
  securityCompanyNameDict,
  insuranceDict,
} from '../../static/detail';

class DetailContainer extends React.Component {
  state = {
    warehouse: null,
    warehouseInfo: null,
    error: null,
    loading: true,
  };

  getWarehouseInfosObject = ({
    airConditioningType,
    workerExist,
    mainItemType,
    warehouseType,
    cctvExist,
    insurance,
    canPark,
    securityCompanyName,
  }) => {
    const infos = {
      airConditioningType: airConditioningType,
      workerExist: workerExist,
      category: mainItemType,
      houseType: warehouseType,
      cctvExist: cctvExist,
      insuranceName: insurance,
      canPark: canPark,
      securityCompanyName: securityCompanyName,
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
      houseInfosStr: insuranceDict(infos.insuranceName),
      canParkStr: canParkDict(infos.canPark),
      securityCompanyNameStr: securityCompanyNameDict(
        infos.securityCompanyName,
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
      const result = await warehouseApi.getWarehouseInfo(id);
      const { status, data: warehouse } = result;
      if (status !== 200) {
        throw new Error();
      }
      this.setState({
        warehouse: warehouse,
        warehouseInfo: this.getWarehouseInfosObject(warehouse),
        loading: false,
      });
    } catch (err) {
      this.setState({
        error: '해당 창고의 정보가 존재하지 않습니다.',
        loading: false,
      });
    }
  };
  render() {
    const { warehouse, warehouseInfo, error, loading } = this.state;
    return (
      <>
        <DetailPresenter
          warehouse={warehouse}
          warehouseInfo={warehouseInfo}
          error={error}
          loading={loading}
        />
      </>
    );
  }
}
export default DetailContainer;
