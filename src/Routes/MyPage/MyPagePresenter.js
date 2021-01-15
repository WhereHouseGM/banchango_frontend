import Helmet from 'react-helmet';
import MyPage from '../../Components/MyPage';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PropTypes from 'prop-types';
import Loading from '../../Components/Loading';
import ErrorPage from '../../Components/ErrorPage';
import TokenAndTypeValidator from '../../Components/Common/TokenAndTypeValidator';

const MyPagePresenter = ({ userInfo, handleSubmit, error, loading }) => (
  <>
    <Helmet>
      <title>반창고 | 마이페이지</title>
    </Helmet>
    <TokenAndTypeValidator />
    <Navbar />
    {loading ? (
      <Loading />
    ) : error ? (
      <ErrorPage error={error} />
    ) : (
      <MyPage userInfo={userInfo} handleSubmit={handleSubmit} />
    )}
    <Footer />
  </>
);

MyPagePresenter.propTypes = {
  userInfo: PropTypes.object,
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default MyPagePresenter;
