import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: 335px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.grey100 : theme.colors.grey50};

  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.625rem;

  input {
    width: 235px;
    background: transparent;
    border: none;
    font-size: ${({ theme }) => theme.fonts.size.sm};
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.black} !important;
    }
  }
`;
