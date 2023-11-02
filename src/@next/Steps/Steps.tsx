import React from 'react';
import { Step, StepProps } from './Step';

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStep: number;
  errorSteps?: number[];
  children?: React.ReactElement<StepProps>[];
}

export const StepsComponent = React.forwardRef<HTMLDivElement, StepsProps>(
  function Collapse(
    { currentStep = 0, errorSteps = [], children, ...props }: StepsProps,
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
          const childHasLine =
            (child.props as Pick<StepProps, 'hasLine'>)?.hasLine ||
            index !== children.length - 1;
          const childIndex =
            (child.props as Pick<StepProps, 'index'>)?.index || index + 1;
          return React.cloneElement(child, {
            variant: childVariant,
            hasLine: childHasLine,
            index: childIndex,
          });
        })}
      </div>
    );
  }
);

export const Steps = Object.assign(StepsComponent, {
  Step: Step,
});
