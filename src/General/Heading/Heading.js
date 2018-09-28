/* @flow */

import React, { Fragment } from 'react';
import { HeadingContainer } from '../../Style/HeadingStyle';

const Heading = (props: Props) => {
  const {
    className,
    inline,
    children,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <HeadingContainer className={className} inline={inline} {...defaultProps}>
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
