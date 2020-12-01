import MainTitle from '../../Components/MainTitle';
import MainSearch from '../../Components/MainSearch';
import MainCategory from '../../Components/MainCategory';
import Helmet from 'react-helmet';
import MainDescription from '../../Components/MainDescription';

const MainPresenter = () => {
    return (
        <>
            <Helmet>
                <title>반창고 | 창고중개플랫폼</title>
            </Helmet>
            <MainTitle />
            <MainSearch />
            <MainCategory />
            <hr/>
            <MainDescription/>
            <hr/>
        </>
    )
}

export default MainPresenter;