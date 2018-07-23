/* @flow */

import React from 'react';
import { ProfilePictureWrapper } from '../Style/ProfilePictureStyle';

const ProfilePictureShadow = (props: Props) => {
  const {
    size,
    editable,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ProfilePictureWrapper className={className} size={size} editable={editable} {...defaultProps}>
      {children}
    </ProfilePictureWrapper>
  );
};

type Props = {
  size: string,
  assetUrl: string,
  editable: boolean,
  className: string,
  children: string,
};

export default ProfilePictureShadow;
