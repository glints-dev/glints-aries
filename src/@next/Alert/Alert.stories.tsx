import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Alert, AlertProps } from './Alert';

(Alert as React.FunctionComponent<AlertProps>).displayName = 'Alert';

export default {
  title: '@next/Alert',
  component: Alert,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<AlertProps> = args => {
  const [showAlert, setShowAlert] = useState(false);
  const triggerAlert = () => {
    setShowAlert(true);
  };

  return (
    <>
      <Button onClick={() => triggerAlert()}>Show Alert</Button>
      <Alert
        {...args}
        show={showAlert}
        onDismissed={() => setShowAlert(false)}
      />
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  title: 'Title',
  content: 'Alert content',
  status: 'info',
  children: (
    <Typography as="span" variant="body2" color="#017EB7">
      Learn more
    </Typography>
  ),
};
