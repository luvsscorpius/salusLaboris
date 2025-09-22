  import { createGlobalStyle } from 'styled-components';

  const GlobalStyle = createGlobalStyle`
    /* Reset básico de CSS */

      html, body, #root {
        height: 100%; /* Aplica a altura de 100% apenas nesses elementos */
        scroll-behavior: smooth;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }

  `;

  export default GlobalStyle;
