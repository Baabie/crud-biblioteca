import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Cursive', sans-serif;
    background-color: #f0f8ff;
    color: #333;
  }

  h1, h2 {
    color: #663399;
  }

  button {
    background-color: #663399;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

  input, textarea {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;
