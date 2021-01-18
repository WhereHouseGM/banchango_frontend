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
          setError('원하시는 창고가 있나요?');
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
          title={'검색 결과가 존재하지 않습니다.'}
          message={error}
          newLocation={
            'https://www.cognitoforms.com/WhereHouseGM/%EC%9B%90%ED%95%98%EC%8B%9C%EB%8A%94%EC%B0%BD%EA%B3%A0%EB%A5%BC%EC%A0%81%EC%96%B4%EC%A3%BC%EC%84%B8%EC%9A%94'
          }
          buttonMessage={'원하는 창고 요청하기'}
        />
      ) : (
        <CategoryPresenter warehouses={results} />
      )}
    </>
  );
};

export default CategoryContainer;
