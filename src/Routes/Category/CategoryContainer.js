import React, { useEffect, useState } from 'react';
import CategoryPresenter from './CategoryPresenter';
import { warehouseApi } from '../../api';

const CategoryContainer = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getApi = async () => {
      try {
        let _results = await warehouseApi.getByMainItemTypes(
          sessionStorage.getItem('MainItemType'),
          0,
          10,
        );
        let { status } = _results;
        if (status !== 200) throw new Error();
        const {
          data: { warehouses },
        } = _results;
        setResults(warehouses);
        setLoading(false);
      } catch (Error) {
        setError('검색 결과가 존재하지 않습니다.');
        setLoading(false);
      }
    };
    getApi();
  }, []);
  return (
    <CategoryPresenter warehouses={results} error={error} loading={loading} />
  );
};

export default CategoryContainer;
