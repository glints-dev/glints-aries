import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

import { Collapse, CollapseProps } from './Collapse';

export default {
  title: '@next/Collapse',
  component: Collapse,
  decorators: [
    Story => <BaseContainer>{Story()}</BaseContainer>,
    withGlintsPortalContainer,
  ],
} as Meta;

const Template: Story<CollapseProps> = args => {
  const x = 1;

  return (
    <>
      <Collapse name={x} {...args}>
        <Collapse.Item title="Title1">Content 1</Collapse.Item>
        <Collapse.Item title="Title2">Content 2</Collapse.Item>
        <Collapse.Item title="Title3">Content 3</Collapse.Item>
      </Collapse>
    </>
  );
};

export const Interactive = Template.bind({});
