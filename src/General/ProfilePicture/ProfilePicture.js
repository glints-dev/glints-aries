/* @flow */

import React from 'react';
import { ProfilePictureContainer, ProfilePictureContent } from '../../Style/General/ProfilePictureStyle';

const ProfilePicture = (props: Props) => {
  const {
    editable,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ProfilePictureContainer
      className={className}
      tabIndex="0"
      role="presentation"
      {...defaultProps}
    >
      <ProfilePictureContent
        editable={editable}
        tabIndex="-1"
      >
        {children}
      </ProfilePictureContent>
    </ProfilePictureContainer>
  );
};

type Props = {
  editable: boolean,
  className: string,
  children: string,
};

export default ProfilePicture;
