import Helmet from 'react-helmet';
import Detail from '../../Components/Detail';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PropTypes from 'prop-types';
import Loading from '../../Components/Loading';
import ErrorPage from '../../Components/ErrorPage';

const DetailPresenter = ({ warehouse, error, loading }) => (
  <>
    <Helmet>
      <title>반창고 | 상세페이지</title>
    </Helmet>
    <Navbar />
    {loading ? (
      <Loading />
    ) : error ? (
      <ErrorPage error={error} />
    ) : (
      <Detail warehouse={warehouse} />
    )}
    <Footer />
  </>
);

DetailPresenter.propTypes = {
  warehouse: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
};

export default DetailPresenter;
