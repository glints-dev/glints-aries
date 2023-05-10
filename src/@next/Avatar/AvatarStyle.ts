import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Blue, Green, Neutral, Orange, Red } from '../utilities/colors';
import {
  AvatarBackgroundColorVariant,
  AvatarProps,
  AvatarSizeVariant,
} from './Avatar';

const mediumAvatarSizeStyle = `
  width: 40px;
  height: 40px;
  
  @media (max-width: ${Breakpoints.large}) {
    width: 32px;
    height: 32px;
  }
`;

const largeAvatarSizeStyle = `
  width: 60px;
  height: 60px;

  @media (max-width: ${Breakpoints.large}) {
    width: 40px;
    height: 40px;
  }
`;

const avatarBackgroundColor: {
  [variant in AvatarBackgroundColorVariant]: string;
} = {
  ['supplementary']: Neutral.B99,
  ['warning']: Orange.S21,
  ['danger']: Red.B100,
  ['success']: Green.B89,
  ['outstanding']: Blue.S08,
};

const avatarSizeVariant: {
  [sizeVariant in AvatarSizeVariant]: string;
} = {
  ['large']: largeAvatarSizeStyle,
  ['medium']: mediumAvatarSizeStyle,
};

const getAvatarBackgroundColor = (variant: AvatarBackgroundColorVariant) => {
  if (!(variant in avatarBackgroundColor)) {
    console.warn(
      `${variant} is not a valid variant for the background color, default will be used`
    );
    return avatarBackgroundColor['supplementary'];
  }

  return avatarBackgroundColor[variant];
};

const getAvatarSizeStyle = (sizeVariant: AvatarSizeVariant) => {
  if (!(sizeVariant in avatarSizeVariant)) {
    console.warn(
      `${sizeVariant} is not a valid variant for the size, default will be used`
    );

    return avatarSizeVariant['medium'];
  }

  return avatarSizeVariant[sizeVariant];
};

export const AvatarStyle = styled.div<AvatarProps>`
  ${({ size }: AvatarProps) => {
    return getAvatarSizeStyle(size);
  }}

  ${({ variant }: AvatarProps) => ({
    'background-color': getAvatarBackgroundColor(variant),
  })}

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
