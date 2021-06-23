import styled, { css } from 'styled-components';

interface ContainerProps {
  type: string;
}

export const Container = styled.div<ContainerProps>`
  width: max-content;
  height: 25px;
  padding: 5px;
  background: ${({ theme, type }) => theme.colors.type[type]};
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
    height: 15px;
  }

  span {
    line-height: 14px;
    padding: 5px;
    text-transform: capitalize;

    ${({ theme }) => {
      return css`
        font-size: ${theme.fonts.size.xs};
        font-weight: ${theme.fonts.weight.medium};
        color: ${theme.colors.white};
      `;
    }}
  }
`;
