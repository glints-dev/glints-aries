/* @flow */

import React, { Fragment } from 'react';
import { HeadingLarge, HeadingMedium, HeadingSmall } from './../Style/HeadingStyle';
import { Size } from '../Utils/StyleConfig';

const Heading = (props: Props) => {
  const {
    children,
    size,
    className,
    ...defaultProps
  } = props;

  return (
    <Fragment>
        {size === `${Size.LARGE}`
            ? <HeadingLarge className={className} {...defaultProps}>{children}</HeadingLarge>
            : size === `${Size.MEDIUM}`
            ? <HeadingMedium className={className} {...defaultProps}>{children}</HeadingMedium>
            : size === `${Size.SMALL}`
            ? <HeadingSmall className={className} {...defaultProps}>{children}</HeadingSmall>
            : null
        }
    </Fragment>
  );
}

type Props = {
  children: React$Node,
  size: string,
  className: string,
}

export default Heading;
