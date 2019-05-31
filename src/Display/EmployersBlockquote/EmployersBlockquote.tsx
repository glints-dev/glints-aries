import * as React from 'react';
import classNames from 'classnames';
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
      className={classNames('aries-empblockquote', className)}
      tabIndex={0}
      role="presentation"
      {...defaultProps}
    >
      <BlockquoteWrapper className="empblockquote-wrapper" tabIndex={-1}>
        <BlockquoteContent className="empblockquote-testimony">
          {children}
        </BlockquoteContent>
        <BlockquoteProfileWrapper className="empblockquote-profilewrapper">
          <BlockquoteProfilePicture className="empblockquote-profile">
            <img src={profileURL} alt={alt} aria-hidden="true" />
          </BlockquoteProfilePicture>
          <BlockquoteIdentity>
            <p className="empblockquote-author">{profileName}</p>
            <span className="empblockquote-origin">{additionalInfo}</span>
          </BlockquoteIdentity>
        </BlockquoteProfileWrapper>
      </BlockquoteWrapper>
    </BlockquoteContainer>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof BlockquoteContainer> {
  children: React.ReactNode;
  profileURL: string;
  alt: string;
  profileName: string;
  additionalInfo: string;
}

export default Blockquote;
