import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1680px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        /* FONT FAMILY */
        /* 
        font-family: 'Lora', serif;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Raleway', sans-serif;
         */
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
    }

    body {
        margin: 0;
        padding: 0;
        background: linear-gradient(to left, black, #261F80 25%, #261F80 75%, black 100%);

      

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }

    }

`;
