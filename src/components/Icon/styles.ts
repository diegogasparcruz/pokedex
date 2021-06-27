import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: number;
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ size }) => (size ? `${size}px` : '20px')};
  height: ${({ size }) => (size ? `${size}px` : '20px')};

  svg {
    ${({ theme, size, color }) => {
      if (size) {
        return css`
          width: ${`${size}px`};
          height: ${`${size}px`};
        `;
      }

      if (color) {
        return css`
          path {
            fill: ${theme.colors.type[color]};
          }
        `;
      }
    }};
  }
`;
