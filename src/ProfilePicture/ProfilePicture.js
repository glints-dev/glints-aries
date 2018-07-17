/* @flow */

import React from 'react';
import { ProfilePictureWrapper } from '../Style/ProfilePictureStyle';

const ProfilePicture = (props: Props) => {
  const {
    size, editable, children, className,
  } = props;

  return (
    <ProfilePictureWrapper className={className} size={size} editable={editable}>
      {children}
    </ProfilePictureWrapper>
  );
};

type Props = {
  size: string,
  assetUrl: string,
  editable: boolean,
  className: string,
};

export default ProfilePicture;
