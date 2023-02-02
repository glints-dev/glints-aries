import React, { SVGProps } from 'react';
import { IconNames, iconNames, iconsMappingComponent } from './icons/icons';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconNames;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, ...props }: IconProps,
  ref
) {
  const IconComponent = iconsMappingComponent[name as typeof iconNames[number]];
  return <IconComponent ref={ref} {...props} />;
});
