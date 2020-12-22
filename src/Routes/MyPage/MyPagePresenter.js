import Helmet from 'react-helmet';
import MyPage from '../../Components/MyPage/MyPage';
import Navbar from '../../Components/Navbar/Navbar';
import Message from '../../Components/Message';
import MainFooter from '../../Components/Main/MainFooter';
import PropTypes from 'prop-types';

const DetailPresenter = ({ userInfo, handleSubmit, error, loading }) => (
  <>
    <Helmet>
      <title>반창고 | 마이페이지</title>
    </Helmet>
    <Navbar />
    {loading ? null : 
        error ? (
          <Message text={error} />
        ) : (
          <MyPage userInfo={userInfo} handleSubmit={handleSubmit} />
        )
      
    }
    <MainFooter />
  </>
);

DetailPresenter.propTypes = {
  userInfo: PropTypes.object,
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default DetailPresenter;
