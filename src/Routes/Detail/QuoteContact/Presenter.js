import Helmet from 'react-helmet';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import QuoteContact from '../../../Components/Detail/QuoteContact';
import TokenAndTypeValidator from '../../../Components/Common/TokenAndTypeValidator';

const Presenter = () => (
  <>
    <Helmet>
      <title>반창고 | 견적 요청 목록</title>
    </Helmet>
    <TokenAndTypeValidator />
    <Navbar />
    <QuoteContact />
    <Footer />
  </>
);

export default Presenter;
