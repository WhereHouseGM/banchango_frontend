import React, { useEffect, useState } from 'react';
import { userApi } from '../../../api';

import Presenter from './Presenter';
const Container = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    userApi
      .getEstimates(
        localStorage.getItem('userId'),
        localStorage.getItem('AccessToken'),
      )
      .then(({ data }) => {
        console.log(data);
      })
      .catch(({ response: { status } }) => {
        if (status !== 404) {
          setError('견적을 문의한 내역이 없습니다');
        }
        setLoading(false);
      });
  }, []);
  return <Presenter quotes={quotes} loading={loading} error={error} />;
};
export default Container;
