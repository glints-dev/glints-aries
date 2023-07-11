import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Props, Textarea } from './Textarea';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Input/Textarea',
  component: Textarea,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = args => <Textarea {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Description',
};

export const RemoveFloatingLabelIsTrue = Template.bind({});
RemoveFloatingLabelIsTrue.args = {
  label: 'Remove Floating Label Is True',
  removeFloatingLabel: true,
};
