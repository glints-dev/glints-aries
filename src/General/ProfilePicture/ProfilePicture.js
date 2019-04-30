/* @flow */

import React, { Component } from 'react';

import Icon from '../Icon';

import { ProfilePictureContainer, ProfilePictureContent } from '../../Style/General/ProfilePictureStyle';

class ProfilePicture extends Component <Props, State> {
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
        id="aries-profile"
        className={className}
        role={editable ? 'button' : 'presentation'}
        aria-label="Profile Picture"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        tabIndex={editable && '0'}
        {...defaultProps}
      >
        <ProfilePictureContent
          editable={editable}
          tabIndex={editable && '-1'}
        >
          {isHover && <Icon name="edit" color="white" />}
          {children}
        </ProfilePictureContent>
      </ProfilePictureContainer>
    );
  }
}

type Props = {
  editable: boolean,
  className: string,
  children: string,
};

type State = {
  isHover: boolean,
}

export default ProfilePicture;
