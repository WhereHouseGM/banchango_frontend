import Helmet from 'react-helmet';
import Detail from '../../Components/Detail/Detail';
import Navbar from '../../Components/Navbar/Navbar';
import MainFooter from '../../Components/Main/MainFooter';

const DetailPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 상세페이지</title>
    </Helmet>
    <Navbar />
    <Detail />
    <MainFooter />
  </>
);

DetailPresenter.propTypes = {};

export default DetailPresenter;
