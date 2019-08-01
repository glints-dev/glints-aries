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
    percentage,
    percentageRange = [50],
    size = 8,
    content,
    ...defaultProps
  } = props;
  
  if (percentage < 0 || percentage > 100) {
    throw new Error(`Error: percentage prop on Progress component expected a value between 0-100. Received ${percentage} instead.`)
  }  

  if (percentageRange.length > 2) {
    throw new Error(`Error: percentageRange prop on Progress component expected a maximum of 2 numbers. Received [${percentageRange}] instead.`)
  }

  if (size > 10 || size < 1) {
    throw new Error(`Error: size prop on Progress component expected a number between 1 - 10. Received ${size} instead.`)
  }

  const progressValue = percentage > 100 ? 282.6 * (1 - (100 / 100)) : 282.6 * (1 - (percentage / 100));
  const sizeInEm = (size + 2) / 10;
  
  let color;
  if (percentageRange.length === 2) {
    const [firstRange, secondRange] = percentageRange;
    color = percentage > secondRange ? SecondaryColor.green : 
      (percentage > firstRange ? SecondaryColor.orange : PrimaryColor.glintsred);
  } else if (percentageRange.length === 1) {
    const [firstRange] = percentageRange;
    color = percentage > firstRange ? SecondaryColor.green : SecondaryColor.orange
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
        aria-valuenow={percentage}
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
            {content || <PercentageCompletion>{`${percentage > 100 ? 100 : percentage}%`}</PercentageCompletion>}
            {content ? null : <LabelText>COMPLETE</LabelText>}
          </ProgressLabelWrapper>
        </ProgressContent>
      </ProgressContainer>
    </React.Fragment>
  );
};

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof ProgressContainer>, 'progress'> {
  percentage: number;
  percentageRange?: Array<number>;
  size?: number;
  content?: React.ReactNode;
}

export default Progress;
