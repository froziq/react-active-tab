import { injectGlobal } from 'styled-components';

injectGlobal`
  /* Lato (light, regular) */
  @font-face {
    font-family: Lato;
    font-weight: 300;
    font-style: normal;
    text-rendering: optimizeLegibility;
    src:
      url(fonts/lato-light.woff2) format("woff2"),
      url(fonts/lato-light.woff) format("woff");
  }
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
  }
`;