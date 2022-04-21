import { css } from "@emotion/react";

const ResetCSS = css`
  html,
  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }
  html,
  body,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  input,
  select,
  table,
  textarea {
    font-family: Spoqa Han Sans Neo, -apple-system, system-ui, HelveticaNeue, AppleSDGothicNeo, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    position: relative;
    background-color: #f6f6f6;
    color: #000;
    word-break: break-all;
    -webkit-text-size-adjust: none;
    letter-spacing: -0.02em;
    padding-top: constant(safe-area-inset-top); /* ≤IOS 11.0 */
    padding-top: env(safe-area-inset-top); /* >iOS 11.0 */
    padding-bottom: constant(safe-area-inset-bottom); /* ≤IOS 11.0 */
    padding-bottom: env(safe-area-inset-bottom); /* >iOS 11.0 */
  }

  table {
    border-collapse: collapse;
  }

  fieldset,
  img {
    border: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  address,
  em {
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }

  img,
  svg {
    vertical-align: top;
  }

  mark {
    color: inherit;
    font-weight: 700;
    background: 0 0;
  }

  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    background: 0 0;
  }

  .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  .blind:before {
    display: block;
    width: 0;
    height: 0;
    content: "\\00a0";
    font-size: 0;
  }
  * {
    box-sizing: border-box;
  }

  *:after,
  *:before {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
`;

export default ResetCSS;
