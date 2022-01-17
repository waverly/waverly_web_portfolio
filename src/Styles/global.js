// @flow
/* eslint-disable */

import { css } from "styled-components";
import normalized from "./normalized";

export const globalStyles = css`
  ${normalized}

  @font-face {
    font-family: "gtsectra";
    src: url("/fonts/GT-Sectra-Display-Light.otf");
  }

  html {
    font-size: 10px;
    font-family: "gtsectra", "Times New Roman", Times, serif;
    font-weight: 300;
    background-color: #fffef7;
  }

  body {
    padding: 0;
    font-family: "gtsectra", "Times New Roman", Times, serif;
    color: #440500;
  }

  form {
    margin: 0;
  }

  button,
  input,
  select,
  option,
  textarea {
    background: white;
    /* font-family: "gotham", "Times New Roman", Times, serif; */
    font-weight: 300;
    border: none;
    outline: none;
    line-height: normal;
    padding: 0;
    border-radius: 0;
    color: #454545;
  }

  label {
    color: #454545;
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  ol {
    font-weight: 300;
    margin: 0;
  }

  h1 {
    font-size: 44px;
    font-weight: 600;
    margin-bottom: 35px;

    @media screen and (min-width: 768px) {
      letter-spacing: -0.3px;
      font-size: 84px;
      margin-bottom: 55px;
      margin-left: -10px;
    }
  }

  h2,
  h3,
  h4,
  p,
  a {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.2;
    color: inherit;

    @media screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 1.2;
      color: inherit;
      text-decoration: none;
    }
  }

  a {

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
  }

  #root,
  #reactRoot {
    height: 100%;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`;
