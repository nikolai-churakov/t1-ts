import {createGlobalStyle} from "styled-components";
import JostBold from "./fonts/JostBold.ttf"
import JostBoldW from "./fonts/JostBoldW.woff2"
import JostSemiBold from "./fonts/JostSemiBold.ttf"
import JostSemiBoldW from "./fonts/JostSemiBoldW.woff2"
import JostRegular from "./fonts/JostRegular.ttf"
import JostRegularW from "./fonts/JostRegularW.woff2"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "JostRegular";
    src: url(${JostRegularW}) format('woff2'),
         url(${JostRegular}) format('TrueType');
    font-weight: 400;
  }

  @font-face {
    font-family: "JostSemiBold";
    src: 
     url(${JostSemiBoldW}) format('woff2'),
     url(${JostSemiBold}) format('TrueType');
    font-weight: 600;
  }

  @font-face {
    font-family: "JostBold";
    src: 
     url(${JostBoldW}) format('woff2'),
     url(${JostBold}) format('TrueType');
    font-weight: 700;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  body {
    margin: 0;
    font-family: "JostRegular", sans-serif;
  }

  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyle;