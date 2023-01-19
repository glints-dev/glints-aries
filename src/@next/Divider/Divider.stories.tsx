import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Divider } from './Divider';

(Divider as React.FunctionComponent<void>).displayName = 'Divider';

export default {
  title: '@next/Divider',
  component: Divider,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<void> = () => (
  <div>
    some text
    <Divider />
    another text after divider
  </div>
);

export const Interactive = Template.bind({});

Interactive.args = {};
