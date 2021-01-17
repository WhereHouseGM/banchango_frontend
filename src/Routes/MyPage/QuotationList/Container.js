import React, { useEffect, useState } from 'react';
import { estimateApi } from '../../../api';

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
          setError('인증 토큰에 문제가 있습니다.');
        } else if (status === 403) {
          setError('권한이 없습니다.');
        }
        setLoading(false);
      });
  }, []);
  return <Presenter quotes={quotes} loading={loading} error={error} />;
};
export default Container;
