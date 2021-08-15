import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  font-family: sans-serif;
  }
`;
