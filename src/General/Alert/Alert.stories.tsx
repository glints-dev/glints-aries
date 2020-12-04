import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Alert, Props } from './Alert';
import { Button } from '../Button';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Alert',
  component: Alert,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = args => {
  const [isOpen, setOpen] = useState(args.isOpen);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="solid-blue">
        Show Pop up
      </Button>
      <Alert {...args} isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  type: 'info',
  message: 'You have successfully applied to Glints as Software Engineer.',
};
