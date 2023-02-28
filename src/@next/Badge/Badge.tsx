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
  textColor?: string;
}

const renderTextColor = (
  textColor: string,
  status: BadgeStatusVariant
): string => {
  if (textColor) {
    return textColor;
  }

  if (status === 'new') {
    return Neutral.B100;
  }

  return Neutral.B18;
};
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  function Badge({ children, status, textColor, ...props }: BadgeProps, ref) {
    const content =
      typeof children === 'string' || typeof children === 'number' ? (
        <Typography
          variant="overline"
          color={renderTextColor(textColor, status)}
          as={'span'}
        >
          {children}
        </Typography>
      ) : (
        children
      );
    return (
      <BadgeStyle ref={ref} status={status ? status : 'neutral'} {...props}>
        <div>{content}</div>
      </BadgeStyle>
    );
  }
);
