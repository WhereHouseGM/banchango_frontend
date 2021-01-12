import React, { useState, useEffect } from 'react';
import DetailPresenter from './DetailPresenter';
import { warehouseApi } from '../../api';
import { useParams } from 'react-router-dom';

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
