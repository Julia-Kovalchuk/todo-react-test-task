import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Victor Mono', monospace;
}

li{
    list-style-type: none;
}

button {
    border: none;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
}`;
