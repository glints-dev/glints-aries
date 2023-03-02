import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { ComboBox, ComboBoxProps } from './ComboBox';

(ComboBox as React.FunctionComponent<ComboBoxProps>).displayName = 'ComboBox';

export default {
  title: '@next/ComboBox',
  component: ComboBox,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const DefaultTemplate: Story<ComboBoxProps> = args => {
  return <ComboBox {...args}>Default ComboBox</ComboBox>;
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  url: '#',
};
