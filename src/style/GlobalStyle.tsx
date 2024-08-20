import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'NEXON Lv2 Gothic', sans-serif;
  }
  html{
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  
  a:hover {
    text-decoration: none;
    color: inherit;
  }
  
  button,
  input {
    outline: none;
    cursor: pointer;
  }
  
  input:focus {
    outline: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 1px 0px;
    font-weight: normal;
  }

  p,span {
    margin: 1px 0px;
    font-size: 0.85rem;
    line-height: 1.6rem;
    white-space: pre-line;
  }
  
  /* Default CSS */
  body {
    font-size: 18px;
    line-height: 1.7em;
    margin: 0;
    background-color: #fff;
    color: #333;
    word-break: keep-all;
  }

  /* mobile*/

  @media (max-width: 768px) {
   html{
     font-size: 14px;
    } 
  }
`;

export default GlobalStyle;
