/* @flow */
import React, { Fragment } from 'react';
import { HeadingLarge, HeadingMedium, HeadingSmall } from './../Style/HeadingStyle';
import { Size } from '../Utils/StyleConfig';

const Heading = (props: Props) => {
  const {
    children,
    size,
    ...defaultLabelProps
  } = props;

  return (
    <Fragment>
        {size === `${Size.LARGE}`
            ? <HeadingLarge>{children}</HeadingLarge>
            : size === `${Size.MEDIUM}`
            ? <HeadingMedium>{children}</HeadingMedium>
            : size === `${Size.SMALL}`
            ? <HeadingSmall>{children}</HeadingSmall>
            : null
        }
    </Fragment>
  );
}

export default Heading;
