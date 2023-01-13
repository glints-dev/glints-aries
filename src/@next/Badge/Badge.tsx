import React from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { BadgeStyle } from './BadgeStyle';

const badgeStatusVariant = [
  'neutral',
  'success',
  'informational',
  'warning',
  'critical',
  'promotion',
  'new',
] as const;

export type BadgeStatusVariant = typeof badgeStatusVariant[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  status?: BadgeStatusVariant;
}

export const Badge = ({ children, status, ...props }: BadgeProps) => {
  const content =
    typeof children === 'string' ? (
      <Typography
        variant="overline"
        color={status === 'new' ? Neutral.B100 : Neutral.B18}
        as={'span'}
      >
        {children}
      </Typography>
    ) : (
      children
    );

  return (
    <BadgeStyle status={status ? status : 'neutral'} {...props}>
      <div>{content}</div>
    </BadgeStyle>
  );
};
