import styled from 'styled-components';
import { borderRadius20 } from '../utilities/borderRadius';
import { Blue, Green, Neutral, Orange, Red, Yellow } from '../utilities/colors';
import { space8 } from '../utilities/spacing';
import { BadgeProps, BadgeStatusVariant } from './Badge';

const badgeBackgroundColor: {
  [variant in BadgeStatusVariant]: string;
} = {
  ['neutral']: Neutral.B95,
  ['success']: Green.B89,
  ['informational']: Blue.S08,
  ['warning']: Orange.S42,
  ['critical']: Red.B100,
  ['promotion']: Yellow.S75,
  ['new']: Orange.S87,
};

const getBadgeBackgroundColor = (status: BadgeStatusVariant) => {
  if (!(status in badgeBackgroundColor)) {
    console.warn(`${status} is not a valid status, default will be used`);
    return badgeBackgroundColor['neutral'];
  }

  return badgeBackgroundColor[status];
};

export const BadgeStyle = styled.div<BadgeProps>`
  ${({ status }: BadgeProps) => ({
    'background-color': getBadgeBackgroundColor(status),
  })}}
  width: fit-content;
  padding: 2px ${space8};
  border-radius: ${borderRadius20};
`;
