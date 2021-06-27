import styled, { css } from 'styled-components';
import { rgba } from 'polished';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 115px;
  border-radius: 10px;
  position: relative;

  ${({ theme, color }) => {
    return css`
      background: ${theme.colors.backgroundType[color]};
      box-shadow: 0px 10px 20px ${rgba(`${theme.colors.grey400}`, 0.4)};

      // TODO: alterar para cor específica
      /* ${rgba(`${theme.colors.backgroundType[color]}`, 0.4)}; */
    `;
  }};

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 130px;
    height: 130px;
    filter: grayscale(100%);
    -webkit-transition: -webkit-filter 400ms ease;
    transition: all ease 0.4s;
  }

  &:hover {
    cursor: pointer;

    > img {
      filter: grayscale(0);
      position: relative;
      animation: pokemon 0.3s 2;
    }
  }

  @keyframes pokemon {
    0% {
      left: 0px;
      top: 0px;
    }
    25% {
      left: 0;
      top: -50px;
    }
  }
`;

export const Description = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`;

export const PokemonNumber = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.xs};
      color: ${rgba(`${theme.colors.black}`, 0.6)};
    `;
  }}
`;

export const PokemonName = styled.span`
  text-transform: capitalize;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.md};
      color: ${theme.colors.white};
    `;
  }}
`;
