/* @flow */

import React from 'react';
import { Container } from '../../Style/ProfilePictureStyle';

const ProfilePicture = (props: Props) => {
  const {
    editable,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <Container className={className} editable={editable} {...defaultProps}>
      {children}
    </Container>
  );
};

type Props = {
  editable: boolean,
  className: string,
  children: string,
};

export default ProfilePicture;
