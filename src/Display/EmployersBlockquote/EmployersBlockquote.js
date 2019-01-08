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
      id="aries-empblockquote"
      className={className}
      tabIndex="0"
      role="presentation"
      {...defaultProps}
    >
      <BlockquoteWrapper id="empblockquote-wrapper" tabIndex="-1">
        <BlockquoteContent id="empblockquote-testimony">
          {children}
        </BlockquoteContent>
        <BlockquoteProfileWrapper id="empblockquote-profilewrapper">
          <BlockquoteProfilePicture id="empblockquote-profile">
            <img src={profileURL} alt={alt} aria-hidden="true" />
          </BlockquoteProfilePicture>
          <BlockquoteIdentity>
            <p id="empblockquote-author">{profileName}</p>
            <span id="empblockquote-origin">{additionalInfo}</span>
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
