/* @flow */

import React from 'react';
import { ProfilePictureWrapper, ProfilePictureImage } from '../Style/ProfilePictureStyle';

const ProfilePicture = (props: Props) => {
  const { 
    size, 
    assetUrl, 
    editable, 
    className 
  } = props;

  return (
    <ProfilePictureWrapper className={className} size={size} editable={editable}>
      <ProfilePictureImage src={assetUrl} />
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
