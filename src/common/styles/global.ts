import { css } from "@emotion/react";

export default css`
  body,
  html,
  #root {
    font-family: Helvetica;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  button {
    border: none;
    box-shadow: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    border-radius: 4px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
