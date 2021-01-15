import React, { useState, useEffect, useCallback } from 'react';
import DetailPresenter from './DetailPresenter';
import { warehouseApi } from '../../api';
import { useParams } from 'react-router-dom';

const DetailContainer = () => {
  const [warehouse, setWarehouse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const warehouseId = params.warehouseId;

  const getWarehouseInfo = useCallback(() => {
    warehouseApi
      .getWarehouseInfo(warehouseId)
      .then(({ data }) => {
        let houseInfo = [];
        if (data.workerExist) {
          houseInfo.push('packingExist');
        }
        if (data.insurances.length !== 0) {
          houseInfo.push('insuranceExist');
        }
        if (data.cctvExist) {
          houseInfo.push('cctvExist');
        }
        if (data.canPark) {
          houseInfo.push('canPark');
        }
        if (data.airConditioningType === 'COOLING') {
          houseInfo.push('coolingExist');
        }
        if (data.airConditioningType === 'HEATING') {
          houseInfo.push('heatingExist');
        }
        if (data.airConditioningType === 'BOTH') {
          houseInfo.push('coolingAndHeatingExist');
        }
        if (data.doorLockExist) {
          houseInfo.push('lockSystemExist');
        }
        console.log(houseInfo);
        setWarehouse({ ...data, houseInfo });
        setLoading(false);
      })
      .catch(({ response: { status } }) => {
        setLoading(false);
        if (status === 404) {
          setError('창고 정보가 존재하지 않습니다.');
        }
      });
  }, [warehouseId]);

  useEffect(() => {
    getWarehouseInfo();
  }, [getWarehouseInfo]);

  return (
    <DetailPresenter warehouse={warehouse} error={error} loading={loading} />
  );
};

export default DetailContainer;
