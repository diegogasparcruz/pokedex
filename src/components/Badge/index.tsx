import React from 'react';

import Icon from 'components/Icon';

import { capitalize } from 'utils/capitalize';

import { Container } from './styles';

interface BadgeProps {
  type: string;
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <Container type={type}>
      <Icon name={type} size={15} />
      <span>{capitalize(type)}</span>
    </Container>
  );
};

export default Badge;
