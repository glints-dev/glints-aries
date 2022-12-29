import { SVGProps } from 'react';
import * as Icons from './../components';

export const iconNames = [
  'ri-account-circle-fill',
  'ri-account-circle-line',
  'ri-arrow-m-down-fill',
  'ri-arrow-m-left-line',
  'ri-arrow-m-right-line',
  'ri-arrow-up-down-fill',
  'ri-error-warning-fill',
  'ri-error-warning-line',
] as const;

export type IconNames = typeof iconNames[number];
type SVGComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const iconsMappingComponent: { [name in IconNames]: SVGComponent } = {
  ['ri-account-circle-fill']: Icons.RiAccountCircleFill,
  ['ri-account-circle-line']: Icons.RiAccountCircleLine,
  ['ri-arrow-m-down-fill']: Icons.RiArrowMDownFill,
  ['ri-arrow-m-left-line']: Icons.RiArrowMLeftLine,
  ['ri-arrow-m-right-line']: Icons.RiArrowMRightLine,
  ['ri-arrow-up-down-fill']: Icons.RiArrowUpDownFill,
  ['ri-error-warning-fill']: Icons.RiErrorWarningFill,
  ['ri-error-warning-line']: Icons.RiErrorWarningLine,
};
