import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { default as Drawer, Props as DrawerProps } from './Drawer';
import { Button } from '../../General/Button/Button';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
} as Meta;

const Template: Story<DrawerProps> = args => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Button
        variant="solid-blue"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        Toggle
      </Button>
      <Drawer
        {...args}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Button variant="solid-blue" onClick={() => setIsDrawerOpen(false)}>
          Close
        </Button>
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});
