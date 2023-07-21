import React from 'react';
import { Typography } from '../Typography';
import { BadgeStyle, badgeTextColor } from './BadgeStyle';

const badgeStatusVariant = [
  'neutral',
  'success',
  'information',
  'warning',
  'critical',
  'promotion',
  'enticing',
  'attention',
  'primary',
] as const;

export type BadgeStatusVariant = (typeof badgeStatusVariant)[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  hasBorder?: boolean;
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

  return badgeTextColor[status];
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  function Badge(
    { children, hasBorder, status, textColor, ...props }: BadgeProps,
    ref
  ) {
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
      <BadgeStyle
        ref={ref}
        status={status ? status : 'neutral'}
        data-border={hasBorder}
        {...props}
      >
        <div>{content}</div>
      </BadgeStyle>
    );
  }
);
