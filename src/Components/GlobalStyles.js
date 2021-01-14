import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'paybooc-Medium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Medium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'notosans-Regular';
        font-style: normal;
        font-weight: 400;
        src: url('http://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2') format('woff2'),
        url('http://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff') format('woff'),
        url('http://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf') format('opentype');
    }
    body {
        font-family: 'paybooc-Medium', 'notosans-Regular', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
    }
`;

export default globalStyles;
