import Helmet from 'react-helmet';
import Detail from '../../Components/Detail';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const DetailPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 상세페이지</title>
    </Helmet>
    <Navbar />
    <Detail />
    <Footer />
  </>
);

export default DetailPresenter;
