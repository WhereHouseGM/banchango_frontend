import Helmet from 'react-helmet';
import Category from '../../Components/Category/Category';
import PropTypes from 'prop-types';
import Message from '../../Components/Message';
import Header from '../../Components/Header';

const CategoryPresenter = ({ warehouses, error, category, loading }) => (
  <>
    <Helmet>
      <title>반창고 | 창고 목록 보기</title>
    </Helmet>
    <Header />
    {loading ? null : (
      <>
        {error ? (
          <Message text={error} />
        ) : (
          <Category warehouses={warehouses} category={category} />
        )}
      </>
    )}
  </>
);

CategoryPresenter.propTypes = {
  warehouses: PropTypes.array,
  error: PropTypes.string,
  category: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CategoryPresenter;
