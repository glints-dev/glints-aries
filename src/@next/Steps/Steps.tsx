import React from 'react';
import { Step, StepProps } from './Step';

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Step index (1-indexed) marked as processing */
  currentStep: number;
  /** List of indexes (1-indexed) to be marked as error */
  errorSteps?: number[];
  /** Step components as child are required (1-indexed) */
  children?: React.ReactElement<StepProps>[];
  /** If dot type, display dot only; default is normal; automatically passed to all children */
  type?: 'normal' | 'dot';
  /** If true, steps are clickable; default is false; automatically passed to all children */
  clickable?: boolean;
  /** Callback function when step is clicked, index of the step is passed as an argument */
  handleClick?: (index: number) => void;
}

export const StepsComponent = React.forwardRef<HTMLDivElement, StepsProps>(
  function Collapse(
    {
      currentStep = 0,
      errorSteps = [],
      children,
      type = 'normal',
      clickable = false,
      handleClick,
      ...props
    }: StepsProps,
    ref
  ) {
    return (
      <div ref={ref} {...props}>
        {React.Children.map(children, (child, index) => {
          const variant: StepProps['variant'] = errorSteps.includes(index + 1)
            ? 'error'
            : index + 1 === currentStep
            ? 'processing'
            : index + 1 < currentStep
            ? 'completed'
            : 'pending';
          const childVariant =
            (child.props as Pick<StepProps, 'variant'>)?.variant || variant;
          const childIndex =
            (child.props as Pick<StepProps, 'index'>)?.index || index + 1;

          return (
            <child.type
              {...child.props}
              variant={childVariant}
              index={childIndex}
              type={type}
              clickable={clickable}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    );
  }
);

export const Steps = Object.assign(StepsComponent, {
  Step: Step,
});
