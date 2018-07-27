/* @flow */

import React, { Fragment } from 'react';
import { HeadingLarge, HeadingMedium, HeadingSmall } from '../Style/HeadingStyle';
import { Size } from '../Utils/StyleConfig';

const renderHeading = ({
  children,
  size,
  className,
  ...defaultProps
}: Props) => {
  switch (size) {
    case Size.LARGE:
      return (
        <HeadingLarge className={className} {...defaultProps}>
          {children}
        </HeadingLarge>
      );
    case Size.MEDIUM:
      return (
        <HeadingMedium className={className} {...defaultProps}>
          {children}
        </HeadingMedium>
      );
    case Size.SMALL:
      return (
        <HeadingSmall className={className} {...defaultProps}>
          {children}
        </HeadingSmall>
      );
    default:
      return (
        null
      );
  }
};

const Heading = (props: Props) => (
  <Fragment>
    {renderHeading(props)}
  </Fragment>
);

type Props = {
  children: React$Node,
  size: string,
  className: string,
}

export default Heading;
