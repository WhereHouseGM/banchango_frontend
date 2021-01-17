import Helmet from 'react-helmet';
import Category from '../../Components/Category';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PropTypes from 'prop-types';

const CategoryPresenter = ({ warehouses }) => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고 목록 보기</title>
      </Helmet>
      <Navbar />
      <Category warehouses={warehouses} />
      <Footer />
    </>
  );
};

CategoryPresenter.propTypes = {
  warehouses: PropTypes.arrayOf(Object),
};

export default CategoryPresenter;
