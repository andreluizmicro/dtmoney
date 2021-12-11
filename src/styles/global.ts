import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    : root {
        --brackground: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }

    * {
        margin: 0px;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080) {
            font-size: 93.75%; // 15px
        }

        @media(max-width: 720px) {
            font-size: 87,5%; 
        }
    }

    // REM = 1rem = font-size da página, logo se a font-size === 16px 1rem será 16px

    body {
        background: var(--brackground);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    // Tudo que estiver desabilitado na aplicação vai ficar com está configuração
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;