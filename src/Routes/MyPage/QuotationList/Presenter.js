import Helmet from 'react-helmet';
import QuotationList from '../../../Components/MyPage/QuotationList';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

const Presenter = ({ quotes }) => (
  <>
    <Helmet>
      <title>반창고 | 견적 요청 목록</title>
    </Helmet>
    <Navbar />
    <QuotationList quotes={quotes} />
    <Footer />
  </>
);

export default Presenter;
