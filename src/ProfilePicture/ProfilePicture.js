/* @flow */
import React from 'react';
import { ProfilePictureWrapper, ProfilePictureImage } from '../Style/ProfilePictureStyle';

const ProfilePicture = (props: Props) => {
  const { size, assetUrl, editable } = props;

  return (
      <ProfilePictureWrapper size={size} editable={editable}>
          <ProfilePictureImage src={assetUrl} />
      </ProfilePictureWrapper>
  );
}

export default ProfilePicture;
