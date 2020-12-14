import Helmet from 'react-helmet';
import Detail from '../../Components/Detail/Detail';
import Navbar from '../../Components/Navbar/Navbar';
import Message from '../../Components/Message';
import MainFooter from '../../Components/Main/MainFooter';
import PropTypes from 'prop-types';

const DetailPresenter = ({ houseDetail, error, loading }) => (
  <>
    <Helmet>
      <title>반창고 | 상세페이지</title>
    </Helmet>
    <Navbar />
    {loading ? null : (
      <>
        {error ? (
          <Message text={error} />
        ) : (
          <Detail houseDetail={houseDetail} />
        )}
      </>
    )}
    <Detail />
    <MainFooter />
  </>
);

DetailPresenter.propTypes = {
  houseDetail: PropTypes.object,
};

export default DetailPresenter;
