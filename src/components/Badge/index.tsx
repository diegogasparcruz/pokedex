import { Icon } from 'components/Icon';
import { capitalize } from 'utils/capitalize';

import { Container } from './styles';

interface BadgeProps {
  type: string;
}

export function Badge({ type }: BadgeProps) {
  return (
    <Container type={type}>
      <Icon name={type} />
      <span>{capitalize(type)}</span>
    </Container>
  );
}
