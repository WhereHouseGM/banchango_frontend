import Helmet from 'react-helmet';
import WarehouseRegister from '../../Components/WarehouseRegister/WarehouseRegister';

const WarehouseRegisterPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 창고 등록</title>
    </Helmet>
    <WarehouseRegister />
  </>
);

export default WarehouseRegisterPresenter;
