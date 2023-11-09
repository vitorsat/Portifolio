import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Merriweather", serif;
  overflow-x: hidden;
}

body {
  background-color: ${colors.white_100};
  color: ${colors.white};
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  position: relative;
}

body,
input,
button,
textarea {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Merriweather", serif;
  font-weight: 700;
}

svg {
  color: white;
  transition: all 1s;
  transform-origin: 50% 50%;
}

svg:hover {
  cursor: pointer;
  color: ${colors.gray};	
  flex-grow: 0.5px;
  transform: scale(1.1);
}

footer {
  text-align: center;
  position: fixed;
  bottom: 20px;
  color: ${colors.gray};
  width: 100%;
  font-size: 0.8rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: ${colors.gray};
  text-decoration: underline;
}

img {
  transition: all 1s;
  transform-origin: 50% 50%;
}

img:hover {
  cursor: pointer;
  flex-grow: 1px;
  transform: scale(1.2);
}
`;
