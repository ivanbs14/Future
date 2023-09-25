import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%; /* Defina o valor base de 1rem (equivalente a 10px) */
    }
    
    body {
        background-color: ${({ theme }) => theme.COLORS.NEUTRAL09};
        color: ${({ theme }) => theme.COLORS.NEUTRAL01};
        font-size: 1.6rem; /* Agora, 1rem será equivalente a 16px */
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        outline: none;
    }

    a {
        color: ${({ theme }) => theme.COLORS.NEUTRAL01};
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        color: ${({ theme }) => theme.COLORS.PRIMARY02};
        filter: brightness(0.9);
    }
`;