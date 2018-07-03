/* @flow */
import React, { Fragment } from 'react';
import { ProfilePictureWrapper, ProfilePictureImage } from '../Style/ProfilePictureStyle';

const ProfilePicture = (props: Props) => {
  const { size, assetUrl } = props;

  return (
    <Fragment>
        <ProfilePictureWrapper size={size}>
            <ProfilePictureImage src={assetUrl} />
        </ProfilePictureWrapper>
    </Fragment>
  );
}

export default ProfilePicture;
