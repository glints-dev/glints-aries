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
  ['information']: Blue.S08,
  ['warning']: Orange.S21,
  ['critical']: Red.B100,
  ['promotion']: Yellow.S75,
  ['enticing']: Orange.S87,
  ['attention']: Red.B93,
  ['primary']: Blue.S99,
};

export const badgeTextColor: {
  [variant in BadgeStatusVariant]: string;
} = {
  ['neutral']: Neutral.B18,
  ['success']: Neutral.B18,
  ['information']: Neutral.B18,
  ['warning']: Neutral.B18,
  ['critical']: Neutral.B18,
  ['promotion']: Neutral.B18,
  ['enticing']: Neutral.B100,
  ['attention']: Neutral.B100,
  ['primary']: Neutral.B100,
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
  })}
  width: fit-content;
  padding: 2px ${space8};
  border-radius: ${borderRadius20};
  line-height: 0;

  &[data-border='true'] {
    border: 1px solid ${Neutral.B100};
  }
`;
