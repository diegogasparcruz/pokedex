import Image from 'next/image';

import { icons } from 'utils/constants/icons';

interface IconProps {
  name: string;
  size?: number;
}

export function Icon({ name, size }: IconProps) {
  return <Image src={icons[name]} width={size} height={size} />;
}
