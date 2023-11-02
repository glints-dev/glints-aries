import React from 'react';
import { Typography } from '../Typography';
import {
  CircleDiv,
  StepItemWrapper,
  VerticalLine,
  VerticalLineWrapper,
} from './StepStyle';
import { Icon } from '../Icon';
import { Neutral } from '../utilities/colors';

export interface StepProps {
  /** Styles of step, predetermined from parent component, or you can overwrite this */
  variant?: 'pending' | 'completed' | 'processing' | 'error';
  /** Label given to the step component  */
  label?: string;
  hasLine?: boolean;
  /** Step number to be shown, by default it's 1,2,3,... from the parent component, or you can overwrite this */
  index?: number;
  isDot?: boolean;
  clickable?: boolean;
  handleClick?: (index: number) => void;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(function Step(
  {
    variant = 'pending',
    label = '',
    hasLine = true,
    index = 0,
    isDot = false,
    clickable = false,
    handleClick,
  }: StepProps,
  ref
) {
  return (
    <>
      <StepItemWrapper
        ref={ref}
        data-dot={isDot}
        data-clickable={clickable}
        onClick={() => handleClick(index)}
      >
        <CircleDiv data-variant={variant} data-dot={isDot}>
          {variant === 'completed' && <Icon name="ri-check" />}
          {variant === 'error' && <Icon name="ri-close" />}
          {variant === 'processing' && (
            <Typography as="div" variant="caption" color={Neutral.B100}>
              {index}
            </Typography>
          )}
          {variant === 'pending' && (
            <Typography as="div" variant="caption" color={Neutral.B40}>
              {index}
            </Typography>
          )}
        </CircleDiv>
        <Typography
          as="div"
          variant={
            variant === 'processing' || variant === 'error' ? 'body2' : 'body1'
          }
          color={Neutral.B18}
        >
          {label}
        </Typography>
      </StepItemWrapper>
      {hasLine && (
        <VerticalLineWrapper data-dot={isDot}>
          <VerticalLine data-variant={variant} data-dot={isDot} />
        </VerticalLineWrapper>
      )}
    </>
  );
});
