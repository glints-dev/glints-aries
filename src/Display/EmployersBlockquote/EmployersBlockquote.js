/* @flow */

import React from 'react';
import {
  BlockquoteContainer,
  BlockquoteWrapper,
  BlockquoteContent,
  BlockquoteProfileWrapper,
  BlockquoteProfilePicture,
  BlockquoteIdentity,
} from '../../Style/Display/EmployersBlockquoteStyle';

const Blockquote = (props: Props) => {
  const {
    children,
    className,
    profileURL,
    alt,
    profileName,
    additionalInfo,
    ...defaultProps
  } = props;

  return (
    <BlockquoteContainer
      className={className}
      tabIndex="0"
      role="presentation"
      {...defaultProps}
    >
      <BlockquoteWrapper tabIndex="-1">
        <BlockquoteContent>
          {children}
        </BlockquoteContent>
        <BlockquoteProfileWrapper>
          <BlockquoteProfilePicture>
            <img src={profileURL} alt={alt} aria-hidden="true" />
          </BlockquoteProfilePicture>
          <BlockquoteIdentity>
            <p>{profileName}</p>
            <span>{additionalInfo}</span>
          </BlockquoteIdentity>
        </BlockquoteProfileWrapper>
      </BlockquoteWrapper>
    </BlockquoteContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
  profileURL: string,
  alt: string,
  profileName: string,
  additionalInfo: string,
}

export default Blockquote;
