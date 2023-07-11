import { Meta } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Divider, DividerProps } from './Divider';

(Divider as React.FunctionComponent<DividerProps>).displayName = 'Divider';

export default {
  title: '@next/Divider',
  component: Divider,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template = () => (
  <div>
    some text
    <Divider />
    another text after divider
  </div>
);

export const Interactive = Template.bind({});

Interactive.args = {};
