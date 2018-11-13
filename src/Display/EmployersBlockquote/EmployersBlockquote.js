/* @flow */

import React from 'react';
import {
  BlockquoteContainer,
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
  } = props;

  return (
    <BlockquoteContainer className={className}>
      <BlockquoteContent>
        {children}
      </BlockquoteContent>
      <BlockquoteProfileWrapper>
        <BlockquoteProfilePicture>
          <img src={profileURL} alt={alt} />
        </BlockquoteProfilePicture>
        <BlockquoteIdentity>
          <p>{profileName}</p>
          <span>{additionalInfo}</span>
        </BlockquoteIdentity>
      </BlockquoteProfileWrapper>
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
