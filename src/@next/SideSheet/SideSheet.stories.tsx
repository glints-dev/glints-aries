import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Button } from '../Button';
import { ComponentAction } from '../../types/componentAction';
import { SideSheetProps } from './SideSheet';
import { SideSheet } from './SideSheet';
import { Typography } from '../Typography';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: '@next/SideSheet',
  component: SideSheet,
  decorators: [
    Story => <BaseContainer>{Story()}</BaseContainer>,
    withGlintsPortalContainer,
  ],
} as Meta;

const Template: Story<SideSheetProps> = args => {
  const [showSideSheet, setShowSideSheet] = useState<boolean>(false);

  const leftButtonAction: ComponentAction = {
    label: 'Cancel',
    action: () => console.log('cancel action'),
  };
  const rightButtonAction: ComponentAction = {
    label: 'Save',
    action: () => console.log('save action'),
  };

  return (
    <>
      <Button onClick={() => setShowSideSheet(true)}>Show Side Sheet</Button>
      <SideSheet
        {...args}
        isOpen={showSideSheet}
        title="Sample Title"
        description="Sample Description"
        onBack={() => console.log('back button clicked')}
        onClose={() => setShowSideSheet(false)}
        leftButtonAction={leftButtonAction}
        rightButtonAction={rightButtonAction}
      >
        <Typography as="div" variant="body1">
          Side Sheet Content here...
        </Typography>
      </SideSheet>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  header: 'Title',
  headerDescription: 'Description',
  children: 'Content',
  showBackButton: true,
  showCloseButton: true,
};
