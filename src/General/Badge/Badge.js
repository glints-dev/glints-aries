/* @flow */

import React, { Fragment } from 'react';
import { BadgeContainer } from '../../Style/General/BadgeStyle';

const Badge = (props: Props) => {
  const {
    label,
    sup,
    className,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      {label
        && (
          <BadgeContainer
            className={className}
            sup={sup}
            {...defaultProps}
          >
            <span>
              {label}
            </span>
          </BadgeContainer>
        )
      }
    </Fragment>
  );
};

type Props = {
  label: string,
  className: string,
  sup: boolean,
}

export default Badge;
