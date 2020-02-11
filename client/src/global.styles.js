import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 20px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-emphasis: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }

    .logo {
        width: 6em;
        height: 3em;

        @media screen and (max-width: 800px) {
            width: 60px;
            padding: 0;
        }
    }

    .shop-page {
        width: 100vw;
    }
`;