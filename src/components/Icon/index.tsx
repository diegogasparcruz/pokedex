import React from 'react';

import { icons } from 'utils/constants/icons';

import { Container } from './styles';
interface IconProps {
  name: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  return (
    <Container color={name} size={size}>
      {icons[name]}
    </Container>
  );
};

export default Icon;
