import Helmet from 'react-helmet';
import QuotationList from '../../../Components/MyPage/QuotationList';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import Loading from '../../../Components/Loading';
import ErrorPage from '../../../Components/ErrorPage';

const Presenter = ({ quotes, loading, error }) => (
  <>
    <Helmet>
      <title>반창고 | 견적 요청 목록</title>
    </Helmet>
    <Navbar />
    {loading ? (
      <Loading />
    ) : error ? (
      <ErrorPage error={error} />
    ) : (
      <QuotationList quotes={quotes} />
    )}

    <Footer />
  </>
);

export default Presenter;
