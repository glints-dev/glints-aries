import React from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { AvatarStyle } from './AvatarStyle';

const avatarBackgroundColorVariant = [
  'supplementary',
  'warning',
  'danger',
  'success',
  'outstanding',
] as const;

const avatarSizeVariant = ['large', 'medium'] as const;

export type AvatarBackgroundColorVariant =
  (typeof avatarBackgroundColorVariant)[number];

export type AvatarSizeVariant = (typeof avatarSizeVariant)[number];

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AvatarBackgroundColorVariant;
  size?: AvatarSizeVariant;
  initials?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(
    {
      variant = 'supplementary',
      size = 'medium',
      initials,
      ...props
    }: AvatarProps,
    ref
  ) {
    return (
      <AvatarStyle ref={ref} variant={variant} size={size} {...props}>
        <Typography
          variant={size === 'medium' ? 'body1' : 'headline6'}
          color={Neutral.B18}
          as={'span'}
        >
          {initials.slice(0, 2)}
        </Typography>
      </AvatarStyle>
    );
  }
);
