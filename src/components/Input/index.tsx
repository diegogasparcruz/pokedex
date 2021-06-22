import React, { useCallback, useState } from 'react';

import { Container, InputWrap } from './styles';

interface InputProps {
  children: React.ReactNode;
  type?: string;
  name: string;
  placeholder: string;
  className: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ children, type, name, placeholder, className }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    return (
      <Container className={className} isFocused={isFocused}>
        <InputWrap>
          {children}
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={ref}
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </InputWrap>
      </Container>
    );
  }
);

export default Input;
