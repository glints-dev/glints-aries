/* @flow */

import React from 'react';
import { ProfilePictureContainer } from '../../Style/ProfilePictureStyle';

const ProfilePicture = (props: Props) => {
  const {
    editable,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ProfilePictureContainer className={className} editable={editable} {...defaultProps}>
      {children}
    </ProfilePictureContainer>
  );
};

type Props = {
  editable: boolean,
  className: string,
  children: string,
};

export default ProfilePicture;
