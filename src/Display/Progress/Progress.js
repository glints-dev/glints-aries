/* @flow */

import React, { Fragment } from 'react';

import { ProgressContainer, ProgressLabelWrapper } from '../../Style/Display/ProgressStyle';
import { SecondaryColor } from '../../Style/Colors';

const Progress = (props: Props) => {
  const {
    className,
    percentage,
    ...defaultProps
  } = props;

  const progressValue = percentage > 100 ? 282.6 * (1 - (100 / 100)) : 282.6 * (1 - (percentage / 100));
  const color = percentage > 50 ? SecondaryColor.green : SecondaryColor.orange;

  return (
    <Fragment>
      {percentage >= 0 && (
        <ProgressContainer className={className} progress={progressValue} {...defaultProps}>
          <svg width="8em" height="8em" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke={SecondaryColor.lighterblack} strokeWidth="8" />
            <circle className="progress-circle__value" cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="8" />
          </svg>
          <ProgressLabelWrapper>
            {`${percentage > 100 ? 100 : percentage}%`}
            <p>COMPLETE</p>
          </ProgressLabelWrapper>
        </ProgressContainer>
      )}
    </Fragment>
  );
};

type Props = {
  className: string,
  percentage: number,
}

export default Progress;
