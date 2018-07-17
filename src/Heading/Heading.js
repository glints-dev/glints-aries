/* @flow */

import React, { Fragment } from 'react';
import { HeadingLarge, HeadingMedium, HeadingSmall } from './../Style/HeadingStyle';
import { Size } from '../Utils/StyleConfig';

const Heading = (props: Props) => {
  const {
    children,
    size,
    className,
    ...defaultLabelProps
  } = props;

  return (
    <Fragment>
        {size === `${Size.LARGE}`
            ? <HeadingLarge className={className}>{children}</HeadingLarge>
            : size === `${Size.MEDIUM}`
            ? <HeadingMedium className={className}>{children}</HeadingMedium>
            : size === `${Size.SMALL}`
            ? <HeadingSmall className={className}>{children}</HeadingSmall>
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
