import Image from 'next/image';

import { icons } from 'utils/constants/icons';

interface IconProps {
  name: string;
}

export function Icon({ name }: IconProps) {
  return <Image src={icons[name]} />;
}
