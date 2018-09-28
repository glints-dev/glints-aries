/* @flow */

import React, { Fragment } from 'react';
import { BadgeContainer } from '../../Style/BadgeStyle';

const Badge = (props: Props) => {
  const {
    label,
    className,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      {label
        && (
          <BadgeContainer className={className} {...defaultProps}>
            {label}
          </BadgeContainer>
        )
      }
    </Fragment>
  );
};

type Props = {
  label: string,
  className: string,
}

export default Badge;
