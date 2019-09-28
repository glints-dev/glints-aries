import * as React from 'react';
import { isNumber } from 'lodash';
import classNames from 'classnames';

import {
  ProgressContainer,
  ProgressContent,
  ProgressLabelWrapper,
  PercentageCompletion,
  LabelText,
} from '../../Style/Display/ProgressStyle';
import { PrimaryColor, SecondaryColor } from '../../Style/Colors';
import { warningMessages } from './WarningMessages';

const Progress: React.FunctionComponent<Props> = props => {
  const {
    className,
    percentage,
    percentageRange = [50],
    size = 8,
    content,
    ...defaultProps
  } = props;

  let normalizedPercentage;
  let normalizedSize;
  const isPercentageWithinCorrectRange =
    isNumber(percentage) && (percentage < 0 || percentage > 100);

  if (isPercentageWithinCorrectRange) {
    if (percentage < 0) {
      normalizedPercentage = 0;
    } else {
      normalizedPercentage = 100;
    }
    warningMessages.percentageValueOutsideRange({
      propName: 'percentage',
      expectedPropTypeAndValue: 'number between 0-100',
      actualProp: percentage,
      resolvedPropValue: normalizedPercentage,
    });
  } else if (!isNumber(percentage)) {
    normalizedPercentage = 0;
    warningMessages.percentageTypeInvalid({
      propName: 'percentage',
      expectedPropTypeAndValue: 'number between 0-100',
      actualProp: percentage,
      resolvedPropValue: normalizedPercentage,
    });
  } else {
    normalizedPercentage = percentage;
  }
  if (percentageRange.length > 2) {
    warningMessages.percentageRangeExceedsValidLength({
      propName: 'percentageRange',
      expectedPropTypeAndValue: 'number between 0-100',
      actualProp: percentageRange,
      resolvedPropValue: [percentageRange[0], percentageRange[1]],
    });
  }
  if (size < 1 || size > 10) {
    normalizedSize = size < 1 ? 1 : size > 10 ? 10 : size;
    warningMessages.percentageRangeExceedsValidLength({
      propName: 'size',
      expectedPropTypeAndValue: 'number between 1-10',
      actualProp: size,
      resolvedPropValue: normalizedSize,
    });
  } else {
    normalizedSize = size;
  }

  const progressValue =
    normalizedPercentage > 100
      ? 282.6 * (1 - 100 / 100)
      : 282.6 * (1 - normalizedPercentage / 100);
  const sizeInEm = (normalizedSize + 2) / 10;
  let color;

  if (percentageRange.length >= 2) {
    const [firstRange, secondRange] = percentageRange;
    color =
      normalizedPercentage > secondRange
        ? SecondaryColor.green
        : normalizedPercentage > firstRange
        ? SecondaryColor.orange
        : PrimaryColor.glintsred;
  } else if (percentageRange.length === 1) {
    const [firstRange] = percentageRange;
    color =
      normalizedPercentage > firstRange
        ? SecondaryColor.green
        : SecondaryColor.orange;
  } else {
    color = SecondaryColor.green;
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
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={SecondaryColor.lighterblack}
              strokeWidth="8"
            />
            <circle
              className="progress-circle-value"
              aria-label="progress-circle-value"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={color}
              strokeWidth="8"
            />
          </svg>
          <ProgressLabelWrapper aria-hidden="true">
            {content || (
              <PercentageCompletion aria-label="percentage-completion">
                {`${normalizedPercentage}%`}
              </PercentageCompletion>
            )}
            {!content && <LabelText>COMPLETE</LabelText>}
          </ProgressLabelWrapper>
        </ProgressContent>
      </ProgressContainer>
    </React.Fragment>
  );
};

interface Props
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ProgressContainer>,
    'progress'
  > {
  percentage: number;
  percentageRange?: number[];
  size?: number;
  content?: React.ReactNode;
}

export default Progress;
