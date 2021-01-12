import React, { useState, useEffect } from 'react';
import DetailPresenter from './DetailPresenter';
import { warehouseApi } from '../../api';
import { useParams } from 'react-router-dom';
// import {
//   airConditioningTypeDict,
//   categoryInfosDict,
//   workerExistDict,
//   houseTypeDict,
//   cctvExistDict,
//   canParkDict,
//   securityCompanyNameDict,
//   insuranceDict,
// } from '../../static/detail';

const DetailContainer = () => {
  const [warehouse, setWarehouse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const warehouseId = params.warehouseId;
  useEffect(() => {
    let response = (async () => {
      warehouseApi
        .getWarehouseInfo(warehouseId)
        .then(({ data }) => {
          setWarehouse(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError('창고 정보를 불러오는 도중 오류가 발생했습니다.');
        });
    })();
    setWarehouse(response);
  }, [warehouseId]);

  return (
    <DetailPresenter warehouse={warehouse} error={error} loading={loading} />
  );
};

export default DetailContainer;
// class DetailContainer extends React.Component {
//   state = {
//     warehouse: null,
//     warehouseInfo: null,
//     error: null,
//     loading: true,
//   };

//   getWarehouseInfosObject = ({
//     airConditioningType,
//     workerExist,
//     mainItemType,
//     warehouseType,
//     cctvExist,
//     insurance,
//     canPark,
//     securityCompanyName,
//   }) => {
//     const infos = {
//       airConditioningType: airConditioningType,
//       workerExist: workerExist,
//       category: mainItemType,
//       houseType: warehouseType,
//       cctvExist: cctvExist,
//       insuranceName: insurance,
//       canPark: canPark,
//       securityCompanyName: securityCompanyName,
//     };

//     const infosArr = [];
//     const infoStrs = {
//       airConditioningTypeStr: airConditioningTypeDict(
//         infos.airConditioningType,
//       ),
//       workerExistStr: workerExistDict(infos.workerExist),
//       categoryStr: categoryInfosDict(infos.category),
//       houseTypeStr: houseTypeDict(infos.category),
//       cctvExistStr: cctvExistDict(infos.cctvExist),
//       houseInfosStr: insuranceDict(infos.insuranceName),
//       canParkStr: canParkDict(infos.canPark),
//       securityCompanyNameStr: securityCompanyNameDict(
//         infos.securityCompanyName,
//       ),
//     };
//     for (let key in infoStrs) {
//       if (infoStrs[key] !== '') {
//         infosArr.push(infoStrs[key]);
//       }
//     }
//     return infosArr;
//   };

//   componentDidMount = async () => {
//     const {
//       match: {
//         params: { id },
//       },
//     } = this.props;
//     try {
//       const result = await warehouseApi.getWarehouseInfo(id);
//       const { status, data: warehouse } = result;
//       if (status !== 200) {
//         throw new Error();
//       }
//       this.setState({
//         warehouse: warehouse,
//         warehouseInfo: this.getWarehouseInfosObject(warehouse),
//         loading: false,
//       });
//     } catch (err) {
//       this.setState({
//         error: '해당 창고의 정보가 존재하지 않습니다.',
//         loading: false,
//       });
//     }
//   };
//   render() {
//     const { warehouse, warehouseInfo, error, loading } = this.state;
//     return (
//       <>
//         <DetailPresenter
//           warehouse={warehouse}
//           warehouseInfo={warehouseInfo}
//           error={error}
//           loading={loading}
//         />
//       </>
//     );
//   }
// }
// export default DetailContainer;
