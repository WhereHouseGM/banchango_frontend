import Helmet from 'react-helmet';
import Detail from '../../Components/Detail';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PropTypes from 'prop-types';

const DetailPresenter = ({ warehouse }) => (
  <>
    <Helmet>
      <title>반창고 허브 | {warehouse.name}</title>
    </Helmet>
    <Navbar />
    <Detail warehouse={warehouse} />
    <Footer />
  </>
);

DetailPresenter.propTypes = {
  warehouse: PropTypes.object.isRequired,
};

export default DetailPresenter;
