import Helmet from 'react-helmet';
import Detail from '../../Components/Detail';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PropTypes from 'prop-types';

const DetailPresenter = ({ warehouse, loading }) =>
  loading ? (
    <h1>LOADING {/* TODO : Fix loading page. */}</h1>
  ) : (
    <>
      <Helmet>
        <title>반창고 | 상세페이지</title>
      </Helmet>
      <Navbar />
      <Detail warehouse={warehouse} loading={loading} />
      <Footer />
    </>
  );

DetailPresenter.propTypes = {
  warehouse: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
