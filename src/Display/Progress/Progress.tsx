import * as React from 'react';

import classNames from 'classnames';

import { 
  ProgressContainer, 
  ProgressContent, 
  ProgressLabelWrapper, 
  PercentageCompletion, 
  LabelText 
} from '../../Style/Display/ProgressStyle';
import { PrimaryColor, SecondaryColor } from '../../Style/Colors';

const Progress: React.FunctionComponent<Props> = (props) => {
  const {
    className,
    percentage = 100,
    percentageRange = [50],
    size = 8,
    content,
    ...defaultProps
  } = props;

  let normalizedPercentage;
  let normalizedSize;

  if (percentage < 0 || percentage > 100) {
    normalizedPercentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
    console.warn(`Invalid prop value on Progress component: percentage prop expected a value between 0-100. Received ${percentage} instead.`)
  } else {
    normalizedPercentage = percentage;
  }
  if (percentageRange.length > 2) {
    console.warn(`Invalid prop value on Progress component: percentageRange prop expected an array with a maximum of 2 numbers. Received [${percentageRange}] instead.`)
  }
  if (size < 1|| size > 10) {
    normalizedSize = size < 1 ? 1 : size > 10 ? 10 : size;
    console.warn(`Invalid prop value on Progress component: size prop expected a value between 1-10. Received ${size} instead.`)
  } else {
    normalizedSize = size;
  }

  const progressValue = normalizedPercentage > 100 ? 282.6 * (1 - (100 / 100)) : 282.6 * (1 - (normalizedPercentage / 100));
  const sizeInEm = (normalizedSize + 2) / 10;
  let color;
  
  if (percentageRange.length >= 2) {
    const [firstRange, secondRange] = percentageRange;
    color = normalizedPercentage > secondRange ? SecondaryColor.green : 
      (normalizedPercentage > firstRange ? SecondaryColor.orange : PrimaryColor.glintsred);
  } else if (percentageRange.length === 1) {
    const [firstRange] = percentageRange;
    color = normalizedPercentage > firstRange ? SecondaryColor.green : SecondaryColor.orange
  } else {
    color = SecondaryColor.green
  }
  
  return (
    <React.Fragment>
      <ProgressContainer
        className={classNames('aries-progress', className)}
        progress={progressValue}
        size={sizeInEm}
        role="progressbar"
        aria-valuenow={normalizedPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        {...defaultProps}
      >
        <ProgressContent tabIndex={-1} size={sizeInEm}>
          <svg width="8em" height="8em" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke={SecondaryColor.lighterblack} strokeWidth="8" />
            <circle className="progress-circle__value" cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="8" />
          </svg>
          <ProgressLabelWrapper aria-hidden="true">
            {content || <PercentageCompletion>{`${normalizedPercentage > 100 ? 100 : normalizedPercentage}%`}</PercentageCompletion>}
            {content ? null : <LabelText>COMPLETE</LabelText>}
          </ProgressLabelWrapper>
        </ProgressContent>
      </ProgressContainer>
    </React.Fragment>
  );
};

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof ProgressContainer>, 'progress'> {
  percentage: number;
  percentageRange?: [] | [number] | [number, number];
  size?: number;
  content?: React.ReactNode;
}

export default Progress;
