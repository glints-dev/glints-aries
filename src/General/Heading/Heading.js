/* @flow */

import React, { Fragment } from 'react';
import { HeadingContainer } from '../../Style/General/HeadingStyle';

const Heading = (props: Props) => {
  const {
    className,
    inline,
    children,
    uppercaseText,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <HeadingContainer
        id="aries-heading"
        className={className}
        inline={inline}
        uppercaseText={uppercaseText}
        {...defaultProps}
      >
        <span id="heading-text">
          {children}
        </span>
      </HeadingContainer>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  className: string,
  inline: boolean,
}

export default Heading;
