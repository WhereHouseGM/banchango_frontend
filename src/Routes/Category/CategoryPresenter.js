import Helmet from 'react-helmet';
import Category from '../../Components/Category';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PropTypes from 'prop-types';

const CategoryPresenter = ({ warehouses, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고 목록 보기</title>
      </Helmet>
      <Navbar />
      <Category warehouses={warehouses} error={error} loading={loading} />
      <Footer />
    </>
  );
};

CategoryPresenter.propTypes = {
  warehouses: PropTypes.arrayOf(Object),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CategoryPresenter;
