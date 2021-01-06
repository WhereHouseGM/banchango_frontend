import Helmet from 'react-helmet';
import MyPage from '../../Components/MyPage/MyPage';
import Navbar from '../../Components/Navbar';
import Message from '../../Components/Message';
import Footer from '../../Components/Footer';

import PropTypes from 'prop-types';

const DetailPresenter = ({ userInfo, handleSubmit, error, loading }) => (
  <>
    <Helmet>
      <title>반창고 | 마이페이지</title>
    </Helmet>
    <Navbar />
    {loading ? null : error ? (
      <Message text={error} />
    ) : (
      <MyPage userInfo={userInfo} handleSubmit={handleSubmit} />
    )}
    <Footer />
  </>
);

DetailPresenter.propTypes = {
  userInfo: PropTypes.object,
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default DetailPresenter;
