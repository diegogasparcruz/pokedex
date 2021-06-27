import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1.25rem;
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 2.813rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  position: relative;
`;

export const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: center;

  button {
    width: 250px;
    height: 45px;
    border: none;
    border-radius: 4px;
    opacity: 0.7;
    transition: opacity 0.2s;

    ${({ theme }) => {
      return css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.sm};
      `;
    }};

    &:hover {
      opacity: 1;
    }
  }
`;
