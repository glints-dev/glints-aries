/* @flow */

import React, { Fragment } from 'react';
import { HeadingContainer } from '../../Style/General/HeadingStyle';

const Heading = (props: Props) => {
  const {
    className,
    inline,
    children,
    boldText,
    uppercaseText,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <HeadingContainer
        className={className}
        inline={inline}
        boldText={boldText}
        uppercaseText={uppercaseText}
        {...defaultProps}
      >
        <span>
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
