import React, { useEffect, useState, useCallback } from 'react';
import CategoryPresenter from './CategoryPresenter';
import { warehouseApi } from '../../api';

const CategoryContainer = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSearchResults = useCallback(() => {
    warehouseApi
      .getByMainItemTypes(sessionStorage.getItem('MainItemTypes'), 0, 10)
      .then(({ data: { warehouses } }) => {
        setResults(warehouses);
        setLoading(false);
      })
      .catch(({ response: { status } }) => {
        setLoading(false);
        if (status === 404) {
          setError('검색 결과가 존재하지 않습니다.');
        }
      });
  }, []);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  return (
    <CategoryPresenter warehouses={results} error={error} loading={loading} />
  );
};

export default CategoryContainer;
