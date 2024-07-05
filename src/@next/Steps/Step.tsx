import React from 'react';
import { Typography } from '../Typography';
import {
  CircleDiv,
  HorizontalLine,
  HorizontalLineWrapper,
  StepItemContainer,
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
  /** Step number to be shown, by default it's 1,2,3,... from the parent component, or you can overwrite this */
  index?: number;
  type?: 'normal' | 'dot';
  orientation?: 'horizontal' | 'vertical';
}

const LineComponent = ({
  variant,
  type,
  orientation,
}: Pick<StepProps, 'variant' | 'type' | 'orientation'>) => {
  if (orientation === 'vertical') {
    return (
      <VerticalLineWrapper data-dot={type === 'dot'}>
        <VerticalLine data-variant={variant} data-dot={type === 'dot'} />
      </VerticalLineWrapper>
    );
  }

  return (
    <HorizontalLineWrapper data-dot={type === 'dot'}>
      <HorizontalLine data-variant={variant} data-dot={type === 'dot'} />
    </HorizontalLineWrapper>
  );
};

export const Step = React.forwardRef<HTMLDivElement, StepProps>(function Step(
  {
    variant = 'pending',
    label = '',
    index = 0,
    type = 'normal',
    orientation = 'vertical',
  }: StepProps,
  ref
) {
  return (
    <StepItemContainer
      className="step-item-container"
      data-orientation={orientation}
    >
      <StepItemWrapper
        ref={ref}
        data-dot={type === 'dot'}
        className="step-item-wrapper"
      >
        <CircleDiv data-variant={variant} data-dot={type === 'dot'}>
          {variant === 'completed' && (
            <Icon name="ri-check" className="circle-icon" />
          )}
          {variant === 'error' && (
            <Icon name="ri-close" className="circle-icon" />
          )}
          {variant === 'processing' && (
            <Typography
              as="span"
              variant="caption"
              color={Neutral.B100}
              className="circle-icon"
            >
              {index}
            </Typography>
          )}
          {variant === 'pending' && (
            <Typography
              as="span"
              variant="caption"
              color={Neutral.B40}
              className="circle-icon"
            >
              {index}
            </Typography>
          )}
        </CircleDiv>
        <Typography
          className="step-label"
          as="div"
          variant={
            variant === 'processing' || variant === 'error' ? 'body2' : 'body1'
          }
          color={
            variant === 'pending' || variant === 'completed'
              ? Neutral.B40
              : Neutral.B18
          }
        >
          {label}
        </Typography>
      </StepItemWrapper>
      <LineComponent variant={variant} type={type} orientation={orientation} />
    </StepItemContainer>
  );
});
