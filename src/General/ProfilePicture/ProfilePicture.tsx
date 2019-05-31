import * as React from 'react';

import classNames from 'classnames';

import Icon from '../Icon';

import { ProfilePictureContainer, ProfilePictureContent } from '../../Style/General/ProfilePictureStyle';

class ProfilePicture extends React.Component<Props, State> {
  state = {
    isHover: false,
  }

  handleMouseEnter = () => {
    const { editable } = this.props;

    if (editable) {
      this.setState({ isHover: true });
    }
  }

  handleMouseLeave = () => {
    const { editable } = this.props;

    if (editable) {
      this.setState({ isHover: false });
    }
  }

  render() {
    const {
      editable,
      children,
      className,
      ...defaultProps
    } = this.props;

    const { isHover } = this.state;

    return (
      <ProfilePictureContainer
        className={classNames('aries-profile', className)}
        role={editable ? 'button' : 'presentation'}
        aria-label="Profile Picture"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        tabIndex={editable ? 0 : undefined}
        {...defaultProps}
      >
        <ProfilePictureContent
          editable={editable}
          tabIndex={editable ? -1 : undefined}
        >
          {isHover && <Icon name="edit" color="white" />}
          {children}
        </ProfilePictureContent>
      </ProfilePictureContainer>
    );
  }
}

interface Props extends React.ComponentPropsWithoutRef<typeof ProfilePictureContainer> {
  editable?: boolean;
  children: React.ReactNode;
};

interface State {
  isHover: boolean;
}

export default ProfilePicture;
