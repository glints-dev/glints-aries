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
  variant?: 'pending' | 'completed' | 'processing' | 'error';
  label?: string;
  hasLine?: boolean;
  index?: number;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(function Step(
  { variant = 'pending', label = '', hasLine = true, index = 0 }: StepProps,
  ref
) {
  return (
    <>
      <StepItemWrapper ref={ref}>
        <CircleDiv data-variant={variant}>
          {variant === 'completed' && <Icon name="ri-check" />}
          {variant === 'error' && <Icon name="ri-close" />}
          {variant === 'processing' && (
            <Typography as="div" color={Neutral.B100}>
              {index}
            </Typography>
          )}
          {variant === 'pending' && (
            <Typography as="div" color={Neutral.B40}>
              {index}
            </Typography>
          )}
        </CircleDiv>
        <Typography
          as="div"
          variant={
            variant === 'processing' || variant === 'error' ? 'body2' : 'body1'
          }
        >
          {label}
        </Typography>
      </StepItemWrapper>
      {hasLine && (
        <VerticalLineWrapper>
          <VerticalLine data-variant={variant} />
        </VerticalLineWrapper>
      )}
    </>
  );
});
