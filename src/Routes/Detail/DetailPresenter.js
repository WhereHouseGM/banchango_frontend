import Helmet from 'react-helmet';
import Detail from '../../Components/Detail/Detail';
import Header from '../../Components/Header';

const DetailPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 상세페이지</title>
    </Helmet>
    <Header />
    <Detail />
  </>
);

DetailPresenter.propTypes = {};

export default DetailPresenter;
