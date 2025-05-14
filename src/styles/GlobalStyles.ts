import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #5D5FEF;
    --secondary: #FFB800;
    --dark: #0F0F27;
    --light: #F9F9F9;
    --gray: #888888;
    --transition: all 0.3s ease-in-out;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    scroll-behavior: smooth;
    background-color: var(--dark);
    color: var(--light);
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  section {
    padding: 80px 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
  }
`;

export default GlobalStyles; 