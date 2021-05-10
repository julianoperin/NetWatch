import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1780px;
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

    html{
        &::-webkit-scrollbar{
            width: 0.8rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #D3D3D3;
        }
        &::-webkit-scrollbar-track {
    background: #000;
  }

    body {
        margin: 0;
        padding: 0;
        background: linear-gradient(to left, black, #000 25%, #000 75%, black 100%);

      

        h1 {
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--white);
            font-family: 'Montserrat', sans-serif;
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
