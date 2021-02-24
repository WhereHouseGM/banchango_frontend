import Helmet from 'react-helmet';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Team from '../../Components/Team';

const TeamPresenter = () => {
  return (
    <>
      <Helmet>
        <title>반창고 허브 | 팀 소개</title>
      </Helmet>
      <Navbar />
      <Team />
      <Footer />
    </>
  );
};

export default TeamPresenter;
