import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'Nanum Barun Gothic', 나눔고딕, NanumGothic, 돋움, Dotum,
      sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.05em;
  }

  img {
    vertical-align: top;
    border: 0;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  ul, ol, li {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
  }

  .title {
    text-align: center;
  }
`;

export default GlobalStyle;
