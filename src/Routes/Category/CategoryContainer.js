import React, { useEffect, useState, useCallback } from 'react';
import CategoryPresenter from './CategoryPresenter';
import { warehouseApi } from '../../api';
import ErrorPage from '../../Components/ErrorPage';
import Loading from '../../Components/Loading';

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
        if (status === 404) {
          setError('검색 결과가 존재하지 않습니다.');
          setLoading(false);
        } else {
          setError('알 수 없는 오류가 발생했습니다.');
          setLoading(false);
        }
      });
  }, []);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage
          title={'오류'}
          message={error}
          locationToGo={'/'}
          buttonMessage={'메인 화면으로 이동'}
        />
      ) : (
        <CategoryPresenter warehouses={results} />
      )}
    </>
  );
};

export default CategoryContainer;
