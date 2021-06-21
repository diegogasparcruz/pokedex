import { icons } from 'utils/constants/icons';

import { Container } from './styles';

interface IconProps {
  name: string;
  size?: number;
}

export function Icon({ name, size }: IconProps) {
  return (
    <Container color={name} size={size}>
      {icons[name]}
    </Container>
  );
}
