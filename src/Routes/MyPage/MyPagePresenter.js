import Helmet from 'react-helmet';
import MyPage from '../../Components/MyPage';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PropTypes from 'prop-types';
import Loading from '../../Components/Loading';
import ErrorPage from '../../Components/ErrorPage';

const MyPagePresenter = ({ userInfo, handleSubmit, error, loading }) => (
  <>
    <Helmet>
      <title>반창고 | 마이페이지</title>
    </Helmet>
    <Navbar />
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
