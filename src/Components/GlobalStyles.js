import { createGlobalStyle } from 'styled-components';
import bocFont_ttf from '../assets/fonts/paybooc_Medium.ttf';
import bocFont_otf from '../assets/fonts/paybooc_Medium.otf';

import notoFont_otf from '../assets/fonts/NotoSansKR-Regular.otf';

import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
@font-face {
    font-family: 'paybooc-Medium';
    src: url(${bocFont_ttf}) format('truetype');
    src: url(${bocFont_otf}) format('opentype');
    
  }
  @font-face {
      font-family: 'notosans-Regular';
      src: url(${notoFont_otf});
      
  }
    ${reset};
    body {
        font-family: 'paybooc-Medium', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
    }
`;

export default globalStyles;
