import React, { useEffect, useState } from 'react';
import { estimateApi } from '../../../api';
import ErrorPage from '../../../Components/ErrorPage';
import Loading from '../../../Components/Loading';

import Presenter from './Presenter';
const Container = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    estimateApi
      .getEstimateInfo(
        localStorage.getItem('userId'),
        localStorage.getItem('AccessToken'),
      )
      .then(({ data }) => {
        setQuotes(data.estimates);
        setLoading(false);
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
          setError('잘못된 요청입니다.');
        } else if (status === 401) {
          setError('인증 토큰에 문제가 있습니다. 다시 로그인 해주세요.');
        } else if (status === 403) {
          setError('권한이 없습니다.');
        } else {
          setError('알 수 없는 오류가 발생했습니다.');
        }
        setLoading(false);
      });
  }, []);
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
        <Presenter quotes={quotes} />
      )}
    </>
  );
};
export default Container;
