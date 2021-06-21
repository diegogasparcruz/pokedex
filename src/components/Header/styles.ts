import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2.5rem 0;

  .inputSearch {
    margin-top: 1.5625rem;
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.25rem;
`;

export const Title = styled.div`
  margin-top: 2.1875rem;

  h1 {
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }

  p {
    margin-top: 0.625rem;
    line-height: 1.1875rem;

    ${({ theme }) => {
      return css`
        font-size: ${theme.fonts.size.sm};
        color: ${theme.colors.grey400};
      `;
    }};
  }
`;
