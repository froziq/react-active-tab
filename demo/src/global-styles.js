import { injectGlobal } from 'styled-components';

injectGlobal`
  /* Rubik (light) */
  @font-face {
    font-family: RubikLight;
    font-weight: 300;
    font-style: normal;
    text-rendering: optimizeLegibility;
    src:
      url(rubik-light.woff2) format("woff2"),
      url(rubik-light.woff) format("woff");
  }

  /* Rubik (regular) */
  @font-face {
    font-family: RubikRegular;
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    src:
      url(rubik-regular.woff2) format("woff2"),
      url(rubik-regular.woff) format("woff");
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    font-family: 'RubikRegular', sans-serif;
    font-weight: 400;
  }
`;