import * as React from 'react';

import classNames from 'classnames';

import { EditIcon } from '../Icon/components';

import {
  ProfilePictureContainer,
  ProfilePictureContent,
} from '../../Style/General/ProfilePictureStyle';

const ProfilePicture = ({
  editable,
  children,
  className,
  ...defaultProps
}: Props) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    if (editable) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (editable) {
      setIsHover(false);
    }
  };

  return (
    <ProfilePictureContainer
      className={classNames('aries-profile', className)}
      role={editable ? 'button' : 'presentation'}
      aria-label="Profile Picture"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={editable ? 0 : undefined}
      {...defaultProps}
    >
      <ProfilePictureContent
        editable={editable}
        tabIndex={editable ? -1 : undefined}
      >
        {isHover && <EditIcon color="white" />}
        {children}
      </ProfilePictureContent>
    </ProfilePictureContainer>
  );
};

interface Props
  extends React.ComponentPropsWithoutRef<typeof ProfilePictureContainer> {
  editable?: boolean;
  children: React.ReactNode;
}

export default ProfilePicture;
