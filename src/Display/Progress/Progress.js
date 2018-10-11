/* @flow */

import React, { Fragment } from 'react';

import { ProgressContainer, ProgressLabelWrapper } from '../../Style/Display/ProgressStyle';
import { PrimaryColor, SecondaryColor } from '../../Style/Colors';

const Progress = (props: Props) => {
  const {
    className,
    percentage,
    ...defaultProps
  } = props;

  const progressValue = percentage > 100 ? 282.6 * (1 - (100 / 100)) : 282.6 * (1 - (percentage / 100));

  return (
    <ProgressContainer className={className} progress={progressValue} {...defaultProps}>
      {percentage >= 0 && (
        <Fragment>
          <svg width="8em" height="8em" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke={SecondaryColor.lighterblack} strokeWidth="8" />
            <circle className="progress-circle__value" cx="50" cy="50" r="45" fill="none" stroke={PrimaryColor.glintsblue} strokeWidth="8" />
          </svg>
          <ProgressLabelWrapper>
            {`${percentage > 100 ? 100 : percentage}%`}
            <p>COMPLETE</p>
          </ProgressLabelWrapper>
        </Fragment>
      )}
    </ProgressContainer>
  );
};

type Props = {
  className: string,
  percentage: number,
}

export default Progress;
