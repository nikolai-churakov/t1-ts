import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Jost";
    src: local("JostRegular"), url(./fonts/JostRegular.ttf) format(ttf);
    font-weight: 400;
  }

  @font-face {
    font-family: "JostSemiBold";
    src: local("JostSemiBold"), url(./fonts/JostSemiBold.ttf) format(ttf);
    font-weight: 600;
  }

  @font-face {
    font-family: "JostBold";
    src: local("JostBold"), url(./fonts/JostBold.ttf) format(ttf);
    font-weight: 700;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  body {
    margin: 0;
    font-family: "Jost", sans-serif;
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