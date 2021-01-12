import Helmet from 'react-helmet';
import Category from '../../Components/Category';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';

import PropTypes from 'prop-types';
import ErrorPage from '../../Components/ErrorPage';

const CategoryPresenter = ({ warehouses, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고 목록 보기</title>
      </Helmet>
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <Category warehouses={warehouses} />
      )}
      <Footer />
    </>
  );
};

CategoryPresenter.propTypes = {
  warehouses: PropTypes.arrayOf(Object),
  error: PropTypes.any,
  loading: PropTypes.bool,
};

export default CategoryPresenter;
