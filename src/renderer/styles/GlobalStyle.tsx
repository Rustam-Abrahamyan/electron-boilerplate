import {createGlobalStyle } from "styled-components";
import { robotoFontFace } from "./fontFaces";

export const GlobalStyle = createGlobalStyle`
    ${robotoFontFace}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
        overflow-anchor: none;
    }

    html, body {
        font-family: Roboto;
    }

    a {
        color: unset;
        text-decoration: none;

        &:visited {
            text-decoration: none;
        }
    }
`;