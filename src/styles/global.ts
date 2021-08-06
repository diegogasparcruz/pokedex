import { createGlobalStyle } from 'styled-components';

import SFProDisplayBold from 'assets/fonts/sf-pro-display-bold.ttf';
import SFProDisplayMedium from 'assets/fonts/sf-pro-display-medium.ttf';
import SFProDisplayRegular from 'assets/fonts/sf-pro-display-regular.ttf';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
     padding: 0;
     margin: 0;
     outline: 0;
     box-sizing: border-box;
   }
   
   @font-face {
     font-family: 'SF Pro Display';
     font-weight: ${({ theme }) => theme.fonts.weight.regular};
     src: url('${SFProDisplayRegular}');
   }
   
   @font-face {
     font-family: 'SF Pro Display';
     font-weight: ${({ theme }) => theme.fonts.weight.medium};
     src: url('${SFProDisplayMedium}');
   }

   @font-face {
    font-family: 'SF Pro Display';
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    src: url('${SFProDisplayBold}');
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.background.white};
    color: ${({ theme }) => theme.text.black};
    font-family: 'SF Pro Display', serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary.main};
    border-radius: 30px;
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
  }
`;
