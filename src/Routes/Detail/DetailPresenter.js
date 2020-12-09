import Helmet from 'react-helmet';
import Detail from '../../Components/Detail/Detail';
import Navbar from '../../Components/Navbar/Navbar';

const DetailPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 상세페이지</title>
    </Helmet>
    <Navbar />
    <Detail />
  </>
);

DetailPresenter.propTypes = {};

export default DetailPresenter;
