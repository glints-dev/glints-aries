import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Steps, StepsProps } from './Steps';

export default {
  title: '@next/Steps',
  component: Steps,
  decorators: [
    Story => <BaseContainer>{Story()}</BaseContainer>,
    withGlintsPortalContainer,
  ],
} as Meta;

const Template: Story<StepsProps> = args => {
  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [errorSteps, setErrorSteps] = React.useState<number[]>([]);

  const handlePrevClick = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleNextClick = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleSetError = (index: number) => {
    setErrorSteps(prevErrorSteps => {
      if (prevErrorSteps.includes(index)) {
        return prevErrorSteps.filter(item => item !== index);
      } else {
        return [...prevErrorSteps, index];
      }
    });
  };

  return (
    <>
      <Steps {...args} currentStep={currentStep} errorSteps={errorSteps}>
        <Steps.Step label="Label 1" />
        <Steps.Step label="Label 2" />
        <Steps.Step label="Label 3" />
        <Steps.Step label="Label 4" />
        <Steps.Step label="Label 5" />
      </Steps>
      <div style={{ margin: '16px 0 8px' }}>
        Current Step: <b>{currentStep}</b>
      </div>
      <div style={{ margin: '8px 0' }}>
        Error Steps: <b>[{errorSteps.join(', ')}]</b>
      </div>
      <ButtonGroup>
        <Button onClick={handlePrevClick} data-testid="prev-button">
          Prev
        </Button>
        <Button onClick={handleNextClick} data-testid="next-button">
          Next
        </Button>
        <Button
          onClick={() => handleSetError(currentStep)}
          data-testid="error-button"
        >
          Toggle Error
        </Button>
      </ButtonGroup>
    </>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  type: 'normal',
  orientation: 'vertical',
};

Interactive.parameters = {
  docs: {
    source: {
      code: `
    <>
      <Steps {...args} currentStep={currentStep} errorSteps={errorSteps}>
        <Steps.Step label="Label 1" />
        <Steps.Step label="Label 2" />
        <Steps.Step label="Label 3" />
        <Steps.Step label="Label 4" />
        <Steps.Step label="Label 5" />
      </Steps>
      <div style={{ margin: '16px 0 8px' }}>
        Current Step: <b>{currentStep}</b>
      </div>
      <div style={{ margin: '8px 0' }}>
        Error Steps: <b>[{errorSteps.join(', ')}]</b>
      </div>
      <ButtonGroup>
        <Button onClick={handlePrevClick} data-testid="prev-button">
          Prev
        </Button>
        <Button onClick={handleNextClick} data-testid="next-button">
          Next
        </Button>
        <Button
          onClick={() => handleSetError(currentStep)}
          data-testid="error-button"
        >
          Toggle Error
        </Button>
      </ButtonGroup>
    </>
      `,
    },
  },
};
