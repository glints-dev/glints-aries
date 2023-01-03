import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonProps } from './Button';
import { OutlineMonochromeButton } from './OutlineMonochromeStyle';
import { BaseContainer } from '../../../Layout/GlintsContainer/GlintsContainer';

(OutlineMonochromeButton as React.FunctionComponent<ButtonProps>).displayName =
  'OutlineMonochromeButton';

const defaultText = 'Label';

export default {
  title: 'Button/@next/OutlineMonochromeButton',
  component: OutlineMonochromeButton,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<ButtonProps> = args => (
  <OutlineMonochromeButton {...args}>{defaultText}</OutlineMonochromeButton>
);

export const Interactive = Template.bind({});
Interactive.args = { size: 'default', active: false };
