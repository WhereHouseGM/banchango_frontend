import Helmet from 'react-helmet';
import Detail from '../../Components/Detail';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
// import Message from '../../Components/Message';
// import PropTypes from 'prop-types';

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
